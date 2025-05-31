package config

import (
	"fmt"
	"os"

	"github.com/consensys/gnark-crypto/ecc/bn254"
	"gopkg.in/yaml.v3"
)

// AttestationConfig is the top-level configuration structure
type AttestationConfig struct {
	Server   ServerConfig   `yaml:"server"`
	Operator OperatorConfig `yaml:"operator"`
}

// ServerConfig contains gRPC server configuration
type ServerConfig struct {
	Host string `yaml:"host"`
	Port int    `yaml:"port"`
}

// OperatorConfig contains the workload operator's key configuration
type OperatorConfig struct {
	PrivateKeyPath string          `yaml:"private_key_path"` // Path to BN254 private key
	privateKey     *bn254.Fr       // Loaded BN254 private key
	publicKey      *bn254.G1Affine // Corresponding public key
}

// LoadConfig reads and parses the YAML configuration file
func LoadConfig(filepath string) (*AttestationConfig, error) {
	data, err := os.ReadFile(filepath)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file: %v", err)
	}

	var config AttestationConfig
	if err := yaml.Unmarshal(data, &config); err != nil {
		return nil, fmt.Errorf("failed to parse config file: %v", err)
	}

	// Set defaults if not specified
	if config.Server.Host == "" {
		config.Server.Host = "0.0.0.0"
	}
	if config.Server.Port == 0 {
		config.Server.Port = 50051
	}

	// Load operator's BN254 private key
	if config.Operator.PrivateKeyPath != "" {
		keyData, err := os.ReadFile(config.Operator.PrivateKeyPath)
		if err != nil {
			return nil, fmt.Errorf("failed to read operator private key: %v", err)
		}

		// Parse the private key as a BN254 scalar
		var privateKey bn254.Fr
		if _, err := privateKey.SetBytes(keyData); err != nil {
			return nil, fmt.Errorf("failed to parse operator private key: %v", err)
		}

		// Generate the corresponding public key
		var publicKey bn254.G1Affine
		publicKey.ScalarMultiplication(&bn254.G1Affine{}.Generator(), &privateKey)

		config.Operator.privateKey = &privateKey
		config.Operator.publicKey = &publicKey
	}

	return &config, nil
}

// GetOperatorPrivateKey returns the loaded operator private key
func (c *AttestationConfig) GetOperatorPrivateKey() *bn254.Fr {
	return c.Operator.privateKey
}

// GetOperatorPublicKey returns the operator's public key
func (c *AttestationConfig) GetOperatorPublicKey() *bn254.G1Affine {
	return c.Operator.publicKey
}
