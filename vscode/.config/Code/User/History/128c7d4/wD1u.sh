#!/bin/bash

# Function to check if a package is installed
is_installed() {
  pacman -Qi "$1" &> /dev/null
}

# Function to check if a package is installed
is_group_installed() {
  pacman -Qg "$1" &> /dev/null
}

# Function to install packages if not already installed
install_packages() {
  local packages=("$@")
  local to_install=()

  for pkg in "${packages[@]}"; do
    if ! is_installed "$pkg" && ! is_group_installed "$pkg"; then
      to_install+=("$pkg")
    fi
  done

  if [ ${#to_install[@]} -ne 0 ]; then
    echo "Installing: ${to_install[*]}"
    yay -S --noconfirm "${to_install[@]}"
  fi
}

# Function to export currently installed packages
export_installed_packages() {
  local output_file="$1"

  echo "Exporting installed packages to $output_file..."

  # Create directory if it doesn't exist
  mkdir -p "$(dirname "$output_file")"

  # Export explicitly installed packages (not dependencies)
  pacman -Qe > "$output_file"

  # Export AUR packages if yay is installed
  if command -v yay &> /dev/null; then
    echo -e "\n# AUR Packages" >> "$output_file"
    yay -Qm >> "$output_file"
  fi

  echo "Package list exported successfully to $output_file"
}