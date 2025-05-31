#!/bin/bash
set -e

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Ensure we're in the project root
cd "$PROJECT_ROOT"

# Build for Linux AMD64
echo "Building attestation-manager for Linux AMD64..."
GOOS=linux GOARCH=amd64 make build

# Create release package
echo "Creating release package..."
RELEASE_DIR="$PROJECT_ROOT/release"
mkdir -p "$RELEASE_DIR"

# Create tarball
tar -czf "$RELEASE_DIR/attestation-manager.tar.gz" \
    --transform 's,^,attestation-manager/,' \
    bin/attestation-manager \
    config.example.yaml \
    packaging/install.sh \
    packaging/systemd/attestation-manager.service

echo "Release package created at $RELEASE_DIR/attestation-manager.tar.gz"
echo ""
echo "To install on Amazon Linux AMI:"
echo "1. Copy attestation-manager.tar.gz to the target system"
echo "2. Extract: tar xzf attestation-manager.tar.gz"
echo "3. cd attestation-manager"
echo "4. Run: sudo ./packaging/install.sh" 