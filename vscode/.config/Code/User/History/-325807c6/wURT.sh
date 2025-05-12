#!/bin/bash

# Print the logo
print_logo() {
    cat << "EOF"
    ______                _ __    __
   / ____/______  _______(_) /_  / /__
  / /   / ___/ / / / ___/ / __ \/ / _ \
 / /___/ /  / /_/ / /__/ / /_/ / /  __/  Fedora System Crafting Tool
 \____/_/   \__,_/\___/_/_.___/_/\___/   by: typecraft

EOF
}

# Function to display help
show_help() {
  echo "Usage: $0 [OPTION]"
  echo "Options:"
  echo "  -h, --help                 Display this help message"
  echo "  -i, --install              Install packages from packages.conf (default)"
  echo "  -e, --export               Export currently installed packages to a file"
  echo "                             Creates fedora-packages-rpm.txt"
  echo "  -d, --download [FILENAME]  Download and install packages from a file"
  echo "                             Default: fedora-packages-rpm.txt"
  echo "  -c, --current              Export and install currently installed packages"
  echo "                             This is a shortcut for exporting and then installing"
  echo
}

# Parse command line arguments
MODE="install"
IMPORT_FILE=""

while [[ $# -gt 0 ]]; do
  case $1 in
    -h|--help)
      show_help
      exit 0
      ;;
    -i|--install)
      MODE="install"
      shift
      ;;
    -e|--export)
      MODE="export"
      shift
      ;;
    -d|--download)
      MODE="download"
      if [[ -n "$2" && ! "$2" =~ ^- ]]; then
        IMPORT_FILE="$2"
        shift
      fi
      shift
      ;;
    -c|--current)
      MODE="current"
      shift
      ;;
    *)
      echo "Unknown option: $1"
      show_help
      exit 1
      ;;
  esac
done

# Clear screen and show logo
clear
print_logo

# Exit on any error
set -e

# Handle export mode
if [[ "$MODE" == "export" ]]; then
  echo "Exporting currently installed packages..."
  ./rpm-export.sh
  exit 0
fi

# Handle download mode
if [[ "$MODE" == "download" ]]; then
  if [[ -z "$IMPORT_FILE" ]]; then
    IMPORT_FILE="fedora-packages-rpm.txt"
  fi

  if [ ! -f "$IMPORT_FILE" ]; then
    echo "Error: Package list file not found: $IMPORT_FILE"
    exit 1
  fi

  # Update the system first
  echo "Updating system..."
  sudo dnf upgrade -y

  # Import and install packages
  ./install-packages.sh "$IMPORT_FILE"

  # Install flatpaks if the script exists
  if [ -f "install-flatpaks.sh" ]; then
    echo "Installing flatpaks..."
    . install-flatpaks.sh
  fi

  echo "Download and installation complete! You may want to reboot your system."
  exit 0
fi

# Handle current mode (export and install)
if [[ "$MODE" == "current" ]]; then
  echo "Exporting currently installed packages..."
  ./rpm-export.sh

  echo "Installing exported packages..."
  ./install-packages.sh "fedora-packages-rpm.txt"

  # Install flatpaks if the script exists
  if [ -f "install-flatpaks.sh" ]; then
    echo "Installing flatpaks..."
    . install-flatpaks.sh
  fi

  echo "Export and installation complete! You may want to reboot your system."
  exit 0
fi

# Continue with installation mode from packages.conf
# Source the package list
if [ ! -f "packages.conf" ]; then
  echo "Error: packages.conf not found!"
  exit 1
fi

source packages.conf

echo "Starting system setup..."

# Update the system first
echo "Updating system..."
sudo dnf upgrade -y

# Install packages by category
echo "Installing system utilities..."
for pkg in "${SYSTEM_UTILS[@]}"; do
  sudo dnf install -y "$pkg"
done

echo "Installing development tools..."
for pkg in "${DEV_TOOLS[@]}"; do
  sudo dnf install -y "$pkg"
done

echo "Installing system maintenance tools..."
for pkg in "${MAINTENANCE[@]}"; do
  sudo dnf install -y "$pkg"
done

echo "Installing desktop environment..."
for pkg in "${DESKTOP[@]}"; do
  sudo dnf install -y "$pkg"
done

if [[ -n "${OFFICE[@]}" ]]; then
  echo "Installing office applications..."
  for pkg in "${OFFICE[@]}"; do
    sudo dnf install -y "$pkg"
  done
fi

echo "Installing media packages..."
for pkg in "${MEDIA[@]}"; do
  sudo dnf install -y "$pkg"
done

echo "Installing fonts..."
for pkg in "${FONTS[@]}"; do
  sudo dnf install -y "$pkg"
done

# Enable services
echo "Configuring services..."
for service in "${SERVICES[@]}"; do
  if ! systemctl is-enabled "$service" &> /dev/null; then
    echo "Enabling $service..."
    sudo systemctl enable "$service"
  else
    echo "$service is already enabled"
  fi
done

# Some programs just run better as flatpaks. Like discord/spotify
if [ -f "install-flatpaks.sh" ]; then
  echo "Installing flatpaks..."
  . install-flatpaks.sh
fi

echo "Setup complete! You may want to reboot your system."
