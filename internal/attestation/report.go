package attestation

import (
	"crypto/ecdsa"
	"crypto/sha256"
	"fmt"
)

// ReportData represents the 64-byte report data that will be included in the attestation
type ReportData struct {
	InputHash   []byte // SHA-256 hash of input payload
	OutputHash  []byte // SHA-256 hash of output payload
	OperatorSig []byte // ECDSA signature of (InputHash || OutputHash) from workload operator
}

// NewReportData creates a new ReportData instance and signs it with the operator's key
func NewReportData(inputHash, outputHash []byte, operatorKey *ecdsa.PrivateKey) (*ReportData, error) {
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

	// Sign the message
	r, s, err := ecdsa.Sign(nil, operatorKey, messageHash)
	if err != nil {
		return nil, fmt.Errorf("failed to create operator signature: %v", err)
	}

	// Encode signature - we'll use the first 32 bytes of R and first 32 bytes of S
	sig := make([]byte, 64)
	r.FillBytes(sig[:32])
	s.FillBytes(sig[32:])

	return &ReportData{
		InputHash:   inputHash,
		OutputHash:  outputHash,
		OperatorSig: sig,
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
	h1.Write(rd.OperatorSig[:32]) // First half of signature (R value)
	copy(result[:32], h1.Sum(nil))

	// Last 32 bytes: Hash of OutputHash and second half of operator signature
	h2 := sha256.New()
	h2.Write(rd.OutputHash)
	h2.Write(rd.OperatorSig[32:]) // Second half of signature (S value)
	copy(result[32:], h2.Sum(nil))

	return result
}

// VerifyOperatorSignature verifies the operator's signature over the input and output hashes
func VerifyOperatorSignature(inputHash, outputHash, signature []byte, operatorPubKey *ecdsa.PublicKey) bool {
	if len(signature) != 64 {
		return false
	}

	// Recreate the message hash
	h := sha256.New()
	h.Write(inputHash)
	h.Write(outputHash)
	messageHash := h.Sum(nil)

	// Convert signature back to big.Int
	r := new(ecdsa.PublicKey).X.SetBytes(signature[:32])
	s := new(ecdsa.PublicKey).Y.SetBytes(signature[32:])

	return ecdsa.Verify(operatorPubKey, messageHash, r, s)
}
