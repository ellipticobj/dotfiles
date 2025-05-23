#!/bin/bash

# Function to check if a package is installed
is_installed() {
  rpm -q "$1" &> /dev/null
}

# Function to check if a package group is installed
is_group_installed() {
  dnf group list --installed | grep -i "$1" &> /dev/null
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
    sudo dnf install -y "${to_install[@]}"
  fi
}

# Function to export currently installed packages
export_installed_packages() {
  local output_file="$1"

  echo "Exporting installed packages to $output_file..."

  # Create directory if it doesn't exist
  mkdir -p "$(dirname "$output_file")"

  # Export explicitly installed packages (not dependencies)
  echo "# Fedora packages installed on $(date)" > "$output_file"
  echo "# Generated by Furnace" >> "$output_file"
  echo "" >> "$output_file"

  # Get user-installed packages (not dependencies or base system packages)
  dnf repoquery --userinstalled --queryformat "%{name}" | sort > "$output_file.tmp"

  # Read the temporary file and write each package on a new line
  while IFS= read -r pkg; do
    echo "$pkg" >> "$output_file"
  done < "$output_file.tmp"

  # Remove temporary file
  rm -f "$output_file.tmp"

  # Export installed groups
  echo -e "\n# Package Groups" >> "$output_file"
  dnf group list --installed 2>/dev/null | grep -A 100 "Installed Groups:" | tail -n +2 | grep -v "^$" | sed 's/^[ \t]*//' >> "$output_file"

  echo "Package list exported successfully to $output_file"
}

# Function to import and install packages from a file
import_and_install_packages() {
  local input_file="$1"

  if [ ! -f "$input_file" ]; then
    echo "Error: Package list file not found: $input_file"
    return 1
  fi

  echo "Installing packages from $input_file..."

  # Read packages from file, skipping comments and empty lines
  local packages=()
  while IFS= read -r line || [ -n "$line" ]; do
    # Skip comments and empty lines
    if [[ ! "$line" =~ ^#.*$ ]] && [[ -n "$line" ]]; then
      # Check if the package is already installed
      if ! is_installed "$line" && ! is_group_installed "$line"; then
        packages+=("$line")
      fi
    fi
  done < "$input_file"

  # Install packages in batches of 50 to avoid command line length issues
  if [ ${#packages[@]} -ne 0 ]; then
    echo "Found ${#packages[@]} packages to install"

    # Install in batches of 50
    local batch_size=50
    local total_packages=${#packages[@]}
    local batches=$(( (total_packages + batch_size - 1) / batch_size ))

    for ((i=0; i<batches; i++)); do
      local start=$((i * batch_size))
      local end=$(( (i+1) * batch_size > total_packages ? total_packages : (i+1) * batch_size ))
      local batch=("${packages[@]:start:end-start}")

      echo "Installing batch $((i+1))/$batches ($(( end - start )) packages)..."
      sudo dnf install -y "${batch[@]}"
    done
  else
    echo "No new packages found to install in $input_file"
  fi
}