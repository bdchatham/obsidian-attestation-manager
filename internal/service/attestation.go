package service

import (
	"context"
	"crypto/ecdsa"
	"fmt"

	"github.com/bdchatham/obsidian-attestation-manager/internal/attestation"
	"github.com/bdchatham/obsidian-attestation-manager/internal/config"
	pb "github.com/bdchatham/obsidian-attestation-manager/proto"
	"github.com/google/go-sev-guest/client"
)

// AttestationService implements the attestation service interface
type AttestationService struct {
	pb.UnimplementedAttestationServiceServer
	quoteProvider client.QuoteProvider
	operatorKey   *ecdsa.PrivateKey
}

// NewAttestationService creates a new instance of AttestationService
func NewAttestationService(cfg *config.AttestationConfig) *AttestationService {
	// Get a quote provider for SEV-SNP attestation
	provider, err := client.GetQuoteProvider()
	if err != nil {
		// In production, you might want to handle this differently
		return &AttestationService{
			UnimplementedAttestationServiceServer: pb.UnimplementedAttestationServiceServer{},
		}
	}
	return &AttestationService{
		UnimplementedAttestationServiceServer: pb.UnimplementedAttestationServiceServer{},
		quoteProvider:                         provider,
		operatorKey:                           cfg.GetOperatorKey(),
	}
}

func (s *AttestationService) GetAttestation(ctx context.Context, req *pb.AttestationRequest) (*pb.AttestationResponse, error) {
	if s.quoteProvider == nil {
		return nil, fmt.Errorf("SEV quote provider not initialized")
	}

	if s.operatorKey == nil {
		return nil, fmt.Errorf("operator key not initialized")
	}

	// Create report data from request
	reportData, err := attestation.NewReportData(
		req.GetInputHash(),
		req.GetOutputHash(),
		s.operatorKey,
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create report data: %v", err)
	}

	// Convert to 64-byte array for attestation
	reportBytes := reportData.ToBytes()

	// Get the raw quote which includes both report and certificates
	rawQuote, err := s.quoteProvider.GetRawQuote(reportBytes)
	if err != nil {
		return nil, fmt.Errorf("failed to get attestation report: %v", err)
	}

	return &pb.AttestationResponse{
		Report:       rawQuote[:],
		IsSecure:     true,
		ReportData:   reportBytes[:],
		OperatorSig:  reportData.OperatorSig,
		PlatformInfo: fmt.Sprintf("SEV-SNP Platform"),
	}, nil
}
