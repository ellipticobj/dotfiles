#!/bin/bash

# Modify this config file for default terminal and EDITOR
config_file="$HOME/.config/hypr/configs/userdefaults.conf"

tmp_config_file=$(mktemp)
sed 's/^\$//g; s/ = /=/g' "$config_file" > "$tmp_config_file"
source "$tmp_config_file"
# ##################################### #

# variables
configs="$HOME/.config/hypr/configs"
rofi_theme="$HOME/.config/rofi/config-edit.rasi"
msg=""
imagedir="$HOME/.config/swaync/images"
scripts="$HOME/.config/hypr/scripts"

# Function to display the menu options without numbers
menu() {
    cat <<EOF
edit user defaults
edit environment variables
edit window rules
edit user keybinds
edit user settings
edit startup apps
edit decorations
edit animations
edit default keybinds
choose terminal theme (kitty)
configure monitors (nwg-displays)
configure workspace rules (nwg-displays)
GTK settings (nwg-look)
QT settings (qt6ct)
QT settings (qt5ct)
configure hyprland animations
choose monitor profiles
choose rofi themes
search for keybinds
toggle game mode
toggle light/dark nheme
EOF
}

# Main function to handle menu selection
main() {
    choice=$(menu | rofi -i -dmenu -config $rofi_theme -mesg "$msg")
    
    # Map choices to corresponding files
    case "$choice" in
        "edit user defaults") file="$configs/userdefaults.conf" ;;
        "edit environment variables") file="$configs/envariables.conf" ;;
        "edit window rules") file="$configs/windowrules.conf" ;;
        "edit user keybinds") file="$configs/keybinds.conf" ;;
        "edit user settings") file="$configs/settings.conf" ;;
        "edit startup apps") file="$configs/startupapps.conf" ;;
        "edit decorations") file="$configs/decorations.conf" ;;
        "edit animations") file="$configs/animations.conf" ;;
        "edit default keybinds") file="$configs/keybinds.conf" ;;
        "configure monitors (nwg-displays)") 
            if ! command -v nwg-displays &>/dev/null; then
                notify-send -i "$imagedir/error.png" "E-R-R-O-R" "Install nwg-displays first"
                exit 1
            fi
            nwg-displays ;;
        "configure workspace rules (nwg-displays)") 
            if ! command -v nwg-displays &>/dev/null; then
                notify-send -i "$imagedir/error.png" "E-R-R-O-R" "Install nwg-displays first"
                exit 1
            fi
            nwg-displays ;;
		"GTK settings (nwg-look)") 
            if ! command -v nwg-look &>/dev/null; then
                notify-send -i "$imagedir/error.png" "E-R-R-O-R" "Install nwg-look first"
                exit 1
            fi
            nwg-look ;;
		"QT settings (qt6ct)") 
            if ! command -v qt6ct &>/dev/null; then
                notify-send -i "$imagedir/error.png" "E-R-R-O-R" "Install qt6ct first"
                exit 1
            fi
            qt6ct ;;
		"QT settings (qt5ct)") 
            if ! command -v qt5ct &>/dev/null; then
                notify-send -i "$imagedir/error.png" "E-R-R-O-R" "Install qt5ct first"
                exit 1
            fi
            qt5ct ;;
        "choose hyprland animations") $scripts/Animations.sh ;;
        "choose monitor profiles") $scripts/MonitorProfiles.sh ;;
        "choose rofi themes") $scripts/RofiThemeSelector.sh ;;
        "search for keybinds") $scripts/KeyBinds.sh ;;
        "toggle game mode") $scripts/GameMode.sh ;;
        "toggle light/dark theme") $scripts/DarkLight.sh ;;
        *) return ;;  # do nothing for invalid choices
    esac

    # Open the selected file in the terminal with the text editor
    if [ -n "$file" ]; then
        $term -e $edit "$file"
    fi
}

# Check if rofi is already running
if pidof rofi > /dev/null; then
    pkill rofi
fi

main
