.PHONY: all build test clean proto release check-protoc install-protoc

# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
GOMOD=$(GOCMD) mod
BINARY_NAME=attestation-manager

# Proto parameters
PROTOC=protoc
PROTO_DIR=proto
PROTO_FILES=$(PROTO_DIR)/*.proto

# Build directory
BUILD_DIR=bin
LINUX_BUILD_DIR=$(BUILD_DIR)/linux

# Check if protoc is installed
PROTOC_CHECK := $(shell command -v protoc 2> /dev/null)

all: check-protoc clean proto build test

build:
	mkdir -p $(BUILD_DIR)
	$(GOBUILD) -o $(BUILD_DIR)/$(BINARY_NAME) ./cmd/server

test:
	$(GOTEST) -v ./...

clean:
	$(GOCLEAN)
	rm -rf $(BUILD_DIR)
	rm -f $(PROTO_DIR)/*.pb.go

check-protoc:
ifndef PROTOC_CHECK
	$(error "protoc is not installed. Please run 'make install-protoc' first")
endif

install-protoc:
	@echo "Installing protoc compiler..."
ifeq ($(shell uname), Darwin)
	brew install protobuf
else ifeq ($(shell uname), Linux)
	sudo apt-get update && sudo apt-get install -y protobuf-compiler
else
	$(error "Unsupported operating system")
endif
	@echo "protoc installed successfully"

proto: check-protoc
	mkdir -p $(PROTO_DIR)
	$(PROTOC) --go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)

deps:
	$(GOMOD) download
	$(GOMOD) tidy

release: check-protoc clean proto
	mkdir -p $(LINUX_BUILD_DIR)
	GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(LINUX_BUILD_DIR)/$(BINARY_NAME) ./cmd/server
	cd $(LINUX_BUILD_DIR) && tar -czvf $(BINARY_NAME)-linux-amd64.tar.gz $(BINARY_NAME)

# Install required tools
tools: install-protoc
	$(GOGET) google.golang.org/protobuf/cmd/protoc-gen-go@latest
	$(GOGET) google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

.DEFAULT_GOAL := all 