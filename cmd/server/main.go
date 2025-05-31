package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/bdchatham/obsidian-attestation-manager/internal/config"
	"github.com/bdchatham/obsidian-attestation-manager/internal/service"
	pb "github.com/bdchatham/obsidian-attestation-manager/proto"
	"google.golang.org/grpc"
)

const (
	gracefulShutdownTimeout = 5 * time.Second
)

var (
	configFile = flag.String("config", "", "Path to YAML configuration file")
)

// loadAndValidateConfig loads the configuration and validates required fields
func loadAndValidateConfig() (*config.AttestationConfig, error) {
	if *configFile == "" {
		return nil, fmt.Errorf("--config flag is required")
	}

	cfg, err := config.LoadConfig(*configFile)
	if err != nil {
		return nil, fmt.Errorf("failed to load configuration: %v", err)
	}

	if cfg.GetOperatorKey() == nil {
		return nil, fmt.Errorf("operator private key is required")
	}

	return cfg, nil
}

// setupListener creates and returns a TCP listener
func setupListener(host string, port int) (net.Listener, error) {
	addr := fmt.Sprintf("%s:%d", host, port)
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		return nil, fmt.Errorf("failed to listen: %v", err)
	}
	return lis, nil
}

// setupGRPCServer creates and configures the gRPC server
func setupGRPCServer(cfg *config.AttestationConfig) *grpc.Server {
	s := grpc.NewServer()
	attestationService := service.NewAttestationService(cfg)
	pb.RegisterAttestationServiceServer(s, attestationService)
	return s
}

// setupSignalHandler creates a channel for OS signals
func setupSignalHandler() chan os.Signal {
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGTERM, syscall.SIGINT)
	return sigChan
}

// startServer starts the gRPC server in a goroutine
func startServer(s *grpc.Server, lis net.Listener) {
	go func() {
		log.Printf("server listening at %v", lis.Addr())
		if err := s.Serve(lis); err != nil {
			log.Printf("server stopped: %v", err)
		}
	}()
}

// gracefulShutdown handles the graceful shutdown of the server
func gracefulShutdown(s *grpc.Server) {
	ctx, cancel := context.WithTimeout(context.Background(), gracefulShutdownTimeout)
	defer cancel()

	stopped := make(chan struct{})
	go func() {
		s.GracefulStop()
		close(stopped)
	}()

	select {
	case <-ctx.Done():
		log.Printf("shutdown timeout exceeded, forcing server stop")
		s.Stop()
	case <-stopped:
		log.Printf("server stopped gracefully")
	}

	log.Printf("server shutdown complete")
}

func main() {
	flag.Parse()

	// Load and validate configuration
	cfg, err := loadAndValidateConfig()
	if err != nil {
		log.Fatal(err)
	}

	// Setup network listener
	lis, err := setupListener(cfg.Server.Host, cfg.Server.Port)
	if err != nil {
		log.Fatal(err)
	}

	// Setup and start server
	server := setupGRPCServer(cfg)
	startServer(server, lis)

	// Wait for shutdown signal
	sigChan := setupSignalHandler()
	sig := <-sigChan
	log.Printf("received signal %v, initiating graceful shutdown", sig)

	// Perform graceful shutdown
	gracefulShutdown(server)
}
