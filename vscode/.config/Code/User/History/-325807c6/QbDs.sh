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
  echo "  -e, --export [FILENAME]    Export currently installed packages to a file"
  echo "                             Default: ./exported-packages-$(date +%Y%m%d).txt"
  echo "  -d, --download [FILENAME]  Download and install packages from a file"
  echo "                             If no file is specified, it will look for the most recent export"
  echo
}

# Parse command line arguments
MODE="install"
EXPORT_FILE=""
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
      if [[ -n "$2" && ! "$2" =~ ^- ]]; then
        EXPORT_FILE="$2"
        shift
      else
        EXPORT_FILE="./exported-packages-$(date +%Y%m%d).txt"
      fi
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

# Source utility functions
source utils.sh

# Handle export mode
if [[ "$MODE" == "export" ]]; then
  if [[ -z "$EXPORT_FILE" ]]; then
    EXPORT_FILE="./exported-packages-$(date +%Y%m%d).txt"
  fi
  export_installed_packages "$EXPORT_FILE"
  exit 0
fi

# Handle download mode
if [[ "$MODE" == "download" ]]; then
  if [[ -z "$IMPORT_FILE" ]]; then
    # Find the most recent export file
    IMPORT_FILE=$(ls -t ./exported-packages-*.txt 2>/dev/null | head -n 1)
    if [[ -z "$IMPORT_FILE" ]]; then
      echo "Error: No export file found. Please specify a file with --download FILENAME"
      exit 1
    fi
    echo "Using most recent export file: $IMPORT_FILE"
  fi

  # Update the system first
  echo "Updating system..."
  sudo dnf upgrade -y

  # Import and install packages
  import_and_install_packages "$IMPORT_FILE"

  # Install flatpaks if the script exists
  if [ -f "install-flatpaks.sh" ]; then
    echo "Installing flatpaks..."
    . install-flatpaks.sh
  fi

  echo "Download and installation complete! You may want to reboot your system."
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
install_packages "${SYSTEM_UTILS[@]}"

echo "Installing development tools..."
install_packages "${DEV_TOOLS[@]}"

echo "Installing system maintenance tools..."
install_packages "${MAINTENANCE[@]}"

echo "Installing desktop environment..."
install_packages "${DESKTOP[@]}"

if [[ -n "${OFFICE[@]}" ]]; then
  echo "Installing office applications..."
  install_packages "${OFFICE[@]}"
fi

echo "Installing media packages..."
install_packages "${MEDIA[@]}"

echo "Installing fonts..."
install_packages "${FONTS[@]}"

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
