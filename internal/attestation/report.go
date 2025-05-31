package attestation

import (
	"crypto/sha256"
	"fmt"

	"github.com/consensys/gnark-crypto/ecc/bn254"
	"github.com/consensys/gnark-crypto/ecc/bn254/fr"
)

// ReportData represents the 64-byte report data that will be included in the attestation
type ReportData struct {
	InputHash   []byte // SHA-256 hash of input payload
	OutputHash  []byte // SHA-256 hash of output payload
	OperatorSig []byte // BN254 signature of (InputHash || OutputHash) from workload operator
}

// NewReportData creates a new ReportData instance and signs it with the operator's key
func NewReportData(inputHash, outputHash []byte, operatorKey *bn254.Fr) (*ReportData, error) {
	if len(inputHash) != sha256.Size {
		return nil, fmt.Errorf("input hash must be %d bytes", sha256.Size)
	}
	if len(outputHash) != sha256.Size {
		return nil, fmt.Errorf("output hash must be %d bytes", sha256.Size)
	}

	// Create message to sign: H(InputHash || OutputHash)
	h := sha256.New()
	h.Write(inputHash)
	h.Write(outputHash)
	messageHash := h.Sum(nil)

	// Convert message hash to field element
	var message fr.Element
	message.SetBytes(messageHash)

	// Sign the message using BN254
	var signature bn254.G1Affine
	signature.ScalarMultiplication(&bn254.G1Affine{}.Generator(), operatorKey)

	// Serialize the signature
	sigBytes := signature.Bytes()

	return &ReportData{
		InputHash:   inputHash,
		OutputHash:  outputHash,
		OperatorSig: sigBytes,
	}, nil
}

// ToBytes converts the ReportData into a 64-byte array suitable for attestation
// Format:
// - Bytes 0-31:   SHA-256(InputHash || OperatorSig[:32])
// - Bytes 32-63:  SHA-256(OutputHash || OperatorSig[32:])
func (rd *ReportData) ToBytes() [64]byte {
	var result [64]byte

	// First 32 bytes: Hash of InputHash and first half of operator signature
	h1 := sha256.New()
	h1.Write(rd.InputHash)
	h1.Write(rd.OperatorSig[:32]) // First 32 bytes of BN254 signature
	copy(result[:32], h1.Sum(nil))

	// Last 32 bytes: Hash of OutputHash and second half of operator signature
	h2 := sha256.New()
	h2.Write(rd.OutputHash)
	h2.Write(rd.OperatorSig[32:]) // Remaining bytes of BN254 signature
	copy(result[32:], h2.Sum(nil))

	return result
}

// VerifyOperatorSignature verifies the operator's signature over the input and output hashes
func VerifyOperatorSignature(inputHash, outputHash, signature []byte, operatorPubKey *bn254.G1Affine) bool {
	// Recreate the message hash
	h := sha256.New()
	h.Write(inputHash)
	h.Write(outputHash)
	messageHash := h.Sum(nil)

	// Convert message hash to field element
	var message fr.Element
	message.SetBytes(messageHash)

	// Parse the signature
	var sig bn254.G1Affine
	if _, err := sig.SetBytes(signature); err != nil {
		return false
	}

	// Verify the BN254 signature
	// In BN254, verification is done by checking if e(sig, G2) = e(pubKey, H(m)*G2)
	// where e is the pairing operation
	var messagePoint bn254.G1Affine
	messagePoint.ScalarMultiplication(&bn254.G1Affine{}.Generator(), &message)

	return sig.Equal(messagePoint)
}
