# AMD SEV Attestation Manager

A gRPC service for managing AMD SEV/SNP TEE attestations, providing secure binding between input/output and hardware attestations.

## Features

- Secure binding between input/output and attestations
- Operator signature verification
- AMD SEV-SNP hardware attestation
- Configurable deployment options
- Systemd service integration

## Prerequisites

- Amazon Linux AMI with AMD SEV-SNP support
- AMD SEV device (`/dev/sev-guest`) properly configured
- systemd (included in Amazon Linux AMI)

## Installation

### Building from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/bdchatham/obsidian-attestation-manager.git
   cd obsidian-attestation-manager
   ```

2. Build the release package:
   ```bash
   ./packaging/build.sh
   ```

### Installing on Amazon Linux AMI

1. Copy the release package to your server:
   ```bash
   scp release/attestation-manager.tar.gz ec2-user@your-server:~
   ```

2. SSH into your server and extract the package:
   ```bash
   tar xzf attestation-manager.tar.gz
   cd attestation-manager
   ```

3. Run the installation script:
   ```bash
   sudo ./packaging/install.sh
   ```

4. Configure your operator key:
   ```bash
   # Generate a new ECDSA key (if needed)
   openssl ecparam -name prime256v1 -genkey -noout -out operator.key
   sudo mv operator.key /etc/attestation-manager/
   sudo chown attestation:attestation /etc/attestation-manager/operator.key
   sudo chmod 600 /etc/attestation-manager/operator.key
   ```

5. Edit the configuration file:
   ```bash
   sudo vim /etc/attestation-manager/config.yaml
   ```

## Service Management

Start the service:
```bash
sudo systemctl start attestation-manager
```

Check service status:
```bash
sudo systemctl status attestation-manager
```

View logs:
```bash
sudo journalctl -u attestation-manager -f
```

## Configuration

The configuration file is located at `/etc/attestation-manager/config.yaml`. Key configuration options:

- `server.host`: Listen address (default: "0.0.0.0")
- `server.port`: gRPC port (default: 50051)
- `operator_key.private_key_path`: Path to operator's ECDSA private key
- `logging.level`: Log level (debug, info, warn, error)
- `logging.file`: Log file path
- `sev.device`: Path to SEV guest device

## Security Considerations

1. The service runs as a dedicated `attestation` user with minimal privileges
2. The systemd service uses security hardening options
3. Configuration files are protected with appropriate permissions
4. SEV device access is restricted to the attestation service

## Troubleshooting

1. Check SEV device permissions:
   ```bash
   ls -l /dev/sev-guest
   ```

2. Verify service logs:
   ```bash
   sudo journalctl -u attestation-manager -n 100
   ```

3. Check configuration file permissions:
   ```bash
   ls -l /etc/attestation-manager/config.yaml
   ```

4. Ensure the operator key is properly configured:
   ```bash
   sudo -u attestation test -r /etc/attestation-manager/operator.key 