package config

import (
	"crypto/ecdsa"
	"crypto/x509"
	"encoding/pem"
	"fmt"
	"os"

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
	PrivateKeyPath string            `yaml:"private_key_path"` // Path to PEM-encoded ECDSA private key
	privateKey     *ecdsa.PrivateKey // Loaded private key
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

	// Load operator's private key
	if config.Operator.PrivateKeyPath != "" {
		keyData, err := os.ReadFile(config.Operator.PrivateKeyPath)
		if err != nil {
			return nil, fmt.Errorf("failed to read operator private key: %v", err)
		}

		block, _ := pem.Decode(keyData)
		if block == nil {
			return nil, fmt.Errorf("failed to decode PEM block containing private key")
		}

		key, err := x509.ParseECPrivateKey(block.Bytes)
		if err != nil {
			return nil, fmt.Errorf("failed to parse operator private key: %v", err)
		}

		config.Operator.privateKey = key
	}

	return &config, nil
}

// GetOperatorKey returns the loaded operator private key
func (c *AttestationConfig) GetOperatorKey() *ecdsa.PrivateKey {
	return c.Operator.privateKey
}
