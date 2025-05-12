# Furnace 🛠️

A Fedora System Tool that automates the setup and configuration of a Fedora system. It can export your currently installed packages and install them on another system, or install packages from predefined categories.

## Features

- 🔄 Automated system updates
- 📦 Package installation by categories:
  - System utilities
  - Development tools
  - System maintenance tools
  - Desktop environment
  - Office applications
  - Media packages
  - Fonts
- 📋 Export currently installed packages to a file
- 📥 Install packages from an exported list
- 🎮 Flatpak integration for specific applications
- ⚙️ Automatic service configuration

## Prerequisites

- Fedora Linux
- Internet connection
- sudo privileges

## Usage

### Export your currently installed packages

```bash
./run.sh --export
```

This will create a file named `fedora-packages-rpm.txt` with all your currently installed packages.

### Install packages from an export file

```bash
./run.sh --download [FILENAME]
```

If you don't specify a filename, it will use `fedora-packages-rpm.txt` by default.

### Export and install in one step

```bash
./run.sh --current
```

This will export your currently installed packages and then install them, which is useful for setting up a new system with the same packages.

### Install packages from packages.conf (default behavior)

```bash
./run.sh
```

or

```bash
./run.sh --install
```

### See all available options

```bash
./run.sh --help
```
