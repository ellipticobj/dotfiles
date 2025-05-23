#!/bin/bash

# Print the logo
print_logo() {
    cat << "EOF"
    ______                _ __    __
   / ____/______  _______(_) /_  / /__
  / /   / ___/ / / / ___/ / __ \/ / _ \  Fedora System Crafting Tool
 / /___/ /  / /_/ / /__/ / /_/ / /  __/  original by: typecraft
 \____/_/   \__,_/\___/_/_.___/_/\___/   fork by: ellipticobj

EOF
}

# Function to display help
show_help() {
  echo "Usage: $0 [OPTION]"
  echo "Options:"
  echo "  -h, --help                 Display this help message"
  echo "  -a, --all                  Install everything (default)"
  echo "  -p, --packages             Install packages from packages.conf"
  echo "  -f, --flatpaks             Install flatpaks"
  echo "  -t, --fonts                Install fonts"
  echo "  -d, --download [FILENAME]  Install packages from a file"
  echo "                             Default: fedora-packages-rpm.txt"
  echo "  -e, --export               Export currently installed packages to files"
  echo "                             Creates fedora-packages-rpm.txt and packages-exported.conf"
  echo "  -c, --current              Export and install currently installed packages"
  echo
}

# Parse command line arguments
INSTALL_PACKAGES=false
INSTALL_FLATPAKS=false
INSTALL_FONTS=false
EXPORT_PACKAGES=false
IMPORT_PACKAGES=false
IMPORT_FILE=""

# If no arguments, install everything
if [ $# -eq 0 ]; then
  INSTALL_PACKAGES=true
  INSTALL_FLATPAKS=true
  INSTALL_FONTS=true
fi

while [[ $# -gt 0 ]]; do
  case $1 in
    -h|--help)
      show_help
      exit 0
      ;;
    -a|--all)
      INSTALL_PACKAGES=true
      INSTALL_FLATPAKS=true
      INSTALL_FONTS=true
      shift
      ;;
    -p|--packages)
      INSTALL_PACKAGES=true
      shift
      ;;
    -f|--flatpaks)
      INSTALL_FLATPAKS=true
      shift
      ;;
    -t|--fonts)
      INSTALL_FONTS=true
      shift
      ;;
    -e|--export)
      EXPORT_PACKAGES=true
      shift
      ;;
    -d|--download)
      IMPORT_PACKAGES=true
      if [[ -n "$2" && ! "$2" =~ ^- ]]; then
        IMPORT_FILE="$2"
        shift
      else
        IMPORT_FILE="fedora-packages-rpm.txt"
      fi
      shift
      ;;
    -c|--current)
      EXPORT_PACKAGES=true
      IMPORT_PACKAGES=true
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
print_logo

# Exit on any error
set -e

# Export packages if requested
if [[ "$EXPORT_PACKAGES" == true ]]; then
  echo "Exporting currently installed packages..."

  # Export to both formats
  RPM_OUTPUT_FILE="./fedora-packages-rpm.txt"
  CONF_OUTPUT_FILE="./packages-exported.conf"

  echo "Exporting installed packages to $RPM_OUTPUT_FILE and $CONF_OUTPUT_FILE..."

  # Export to rpm text format
  echo "# Fedora packages installed on $(date)" > "$RPM_OUTPUT_FILE"
  echo "# Generated by Furnace" >> "$RPM_OUTPUT_FILE"
  echo "" >> "$RPM_OUTPUT_FILE"
  echo "# User-installed packages" >> "$RPM_OUTPUT_FILE"
  rpm -qa --qf "%{NAME}\n" | sort >> "$RPM_OUTPUT_FILE"

  # Export to packages.conf format
  echo "# Fedora packages installed on $(date)" > "$CONF_OUTPUT_FILE"
  echo "# Generated by Furnace" >> "$CONF_OUTPUT_FILE"
  echo "" >> "$CONF_OUTPUT_FILE"
  echo "# All packages to install" >> "$CONF_OUTPUT_FILE"
  echo "PACKAGES=(" >> "$CONF_OUTPUT_FILE"

  # Get the list of installed packages
  rpm -qa --qf "%{NAME}\n" | sort | while read -r package; do
    echo "  $package" >> "$CONF_OUTPUT_FILE"
  done

  echo ")" >> "$CONF_OUTPUT_FILE"
  echo "" >> "$CONF_OUTPUT_FILE"
  echo "# services" >> "$CONF_OUTPUT_FILE"
  echo "SERVICES=(" >> "$CONF_OUTPUT_FILE"
  echo "  NetworkManager.service" >> "$CONF_OUTPUT_FILE"
  echo "  bluetooth.service" >> "$CONF_OUTPUT_FILE"
  echo ")" >> "$CONF_OUTPUT_FILE"

  echo "Package list exported successfully to $RPM_OUTPUT_FILE and $CONF_OUTPUT_FILE"
fi

# Import packages if requested
if [[ "$IMPORT_PACKAGES" == true ]]; then
  if [[ -z "$IMPORT_FILE" ]]; then
    IMPORT_FILE="fedora-packages-rpm.txt"
  fi

  if [ ! -f "$IMPORT_FILE" ]; then
    echo "Error: Package list file not found: $IMPORT_FILE"
    exit 1
  fi

  echo "Installing packages from $IMPORT_FILE..."

  # Read packages from file, skipping comments and empty lines
  PACKAGES=()
  while IFS= read -r line || [ -n "$line" ]; do
    # Skip comments and empty lines
    if [[ ! "$line" =~ ^#.*$ ]] && [[ -n "$line" ]]; then
      # Check if the package is already installed
      if ! rpm -q "$line" &> /dev/null; then
        PACKAGES+=("$line")
      fi
    fi
  done < "$IMPORT_FILE"

  # Install packages in batches of 50 to avoid command line length issues
  if [ ${#PACKAGES[@]} -ne 0 ]; then
    echo "Found ${#PACKAGES[@]} packages to install"

    # Install in batches of 50
    BATCH_SIZE=50
    TOTAL_PACKAGES=${#PACKAGES[@]}
    BATCHES=$(( (TOTAL_PACKAGES + BATCH_SIZE - 1) / BATCH_SIZE ))

    for ((i=0; i<BATCHES; i++)); do
      START=$((i * BATCH_SIZE))
      END=$(( (i+1) * BATCH_SIZE > TOTAL_PACKAGES ? TOTAL_PACKAGES : (i+1) * BATCH_SIZE ))
      BATCH=("${PACKAGES[@]:START:END-START}")

      echo "Installing batch $((i+1))/$BATCHES ($(( END - START )) packages)..."
      sudo dnf install -y "${BATCH[@]}"
    done

    echo "All packages have been installed!"
  else
    echo "No new packages found to install in $IMPORT_FILE"
  fi
fi

# Install packages from packages.conf
if [[ "$INSTALL_PACKAGES" == true ]]; then
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

  # Function to install packages in batches
  install_packages() {
    local packages=("$@")

    if [ ${#packages[@]} -eq 0 ]; then
      return
    fi

    echo "Installing packages..."

    # Install in batches of 20 to avoid command line length issues
    local batch_size=20
    local total_packages=${#packages[@]}
    local batches=$(( (total_packages + batch_size - 1) / batch_size ))

    for ((i=0; i<batches; i++)); do
      local start=$((i * batch_size))
      local end=$(( (i+1) * batch_size > total_packages ? total_packages : (i+1) * batch_size ))
      local batch=("${packages[@]:start:end-start}")

      echo "Installing batch $((i+1))/$batches ($(( end - start )) packages)..."
      sudo dnf install -y "${batch[@]}"
    done
  }

  # Install all packages
  install_packages "${PACKAGES[@]}"

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
fi

# Install flatpaks
if [[ "$INSTALL_FLATPAKS" == true ]]; then
  echo "Installing flatpaks..."

  FLATPAKS=(
    "app.zen_browser.zen"
  )

  for pak in "${FLATPAKS[@]}"; do
    if ! flatpak list | grep -i "$pak" &> /dev/null; then
      echo "installing flatpak: $pak"
      flatpak install --noninteractive "$pak"
    else
      echo "flatpak already installed: $pak"
    fi
  done
fi

# Install fonts
if [[ "$INSTALL_FONTS" == true ]]; then
  echo "Installing fonts..."

  if wget -q https://github.com/g5becks/Cartograph/archive/refs/heads/main.zip; then
    mkdir -p "$HOME/.local/share/fonts/CartographCF/" && unzip -o -q "main.zip" -d "$HOME/.local/share/fonts/CartographCF/" && echo "Cartograph CF installed successfully"
  else
    echo
    echo "failed to download cartograph CF :("
  fi
fi

echo "Setup complete! You may want to reboot your system."
