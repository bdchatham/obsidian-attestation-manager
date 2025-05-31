#!/bin/bash
set -e

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit 1
fi

# Create attestation user and group
groupadd -r attestation 2>/dev/null || true
useradd -r -g attestation -s /sbin/nologin -d /var/lib/attestation-manager attestation 2>/dev/null || true

# Create necessary directories
mkdir -p /etc/attestation-manager
mkdir -p /var/log/attestation-manager
mkdir -p /var/lib/attestation-manager

# Copy binary
cp bin/attestation-manager /usr/local/bin/
chmod 755 /usr/local/bin/attestation-manager

# Copy systemd service
cp packaging/systemd/attestation-manager.service /etc/systemd/system/

# Copy default config if it doesn't exist
if [ ! -f /etc/attestation-manager/config.yaml ]; then
    cp config.example.yaml /etc/attestation-manager/config.yaml
fi

# Set permissions
chown -R attestation:attestation /etc/attestation-manager
chown -R attestation:attestation /var/log/attestation-manager
chown -R attestation:attestation /var/lib/attestation-manager
chmod 600 /etc/attestation-manager/config.yaml

# Ensure SEV device has correct permissions
if [ -e "/dev/sev-guest" ]; then
    chown root:attestation /dev/sev-guest
    chmod 660 /dev/sev-guest
else
    echo "Warning: /dev/sev-guest not found. Please ensure AMD SEV is properly configured."
fi

# Reload systemd and enable service
systemctl daemon-reload
systemctl enable attestation-manager.service
systemctl restart attestation-manager.service

echo "Installation complete. Please check service status with: systemctl status attestation-manager" 