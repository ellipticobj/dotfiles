#!/bin/bash

# Modify this config file for default terminal and EDITOR
config_file="$HOME/.config/hypr/userconfigs/01-userDefaults.conf"

tmp_config_file=$(mktemp)
sed 's/^\$//g; s/ = /=/g' "$config_file" > "$tmp_config_file"
source "$tmp_config_file"
# ##################################### #

# variables
configs="$HOME/.config/hypr/configs"
userconfigs="$HOME/.config/hypr/userconfigs"
rofi_theme="$HOME/.config/rofi/config-edit.rasi"
msg=""
iDIR="$HOME/.config/swaync/images"
scriptsDir="$HOME/.config/hypr/scripts"
userscripts="$HOME/.config/hypr/userscripts"

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
        "edit user defaults") file="$userconfigs/01-userDefaults.conf" ;;
        "edit environment variables") file="$userconfigs/envariables.conf" ;;
        "edit window rules") file="$userconfigs/windowRules.conf" ;;
        "edit user keybinds") file="$userconfigs/userKeybinds.conf" ;;
        "edit user settings") file="$userconfigs/userSettings.conf" ;;
        "edit startup Apps") file="$userconfigs/startupApps.conf" ;;
        "edit decorations") file="$userconfigs/userDecorations.conf" ;;
        "edit animations") file="$userconfigs/userAnimations.conf" ;;
        "edit default keybinds") file="$configs/Keybinds.conf" ;;
        "choose terminal theme (kitty)") $scriptsDir/kittyThemes.sh ;;
        "configure monitors (nwg-displays)") 
            if ! command -v nwg-displays &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install nwg-displays first"
                exit 1
            fi
            nwg-displays ;;
        "configure workspace rules (nwg-displays)") 
            if ! command -v nwg-displays &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install nwg-displays first"
                exit 1
            fi
            nwg-displays ;;
		"GTK settings (nwg-look)") 
            if ! command -v nwg-look &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install nwg-look first"
                exit 1
            fi
            nwg-look ;;
		"QT settings (qt6ct)") 
            if ! command -v qt6ct &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install qt6ct first"
                exit 1
            fi
            qt6ct ;;
		"QT settings (qt5ct)") 
            if ! command -v qt5ct &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install qt5ct first"
                exit 1
            fi
            qt5ct ;;
        "choose hyprland animations") $scriptsDir/Animations.sh ;;
        "choose monitor profiles") $scriptsDir/MonitorProfiles.sh ;;
        "choose rofi themes") $scriptsDir/RofiThemeSelector.sh ;;
        "search for keybinds") $scriptsDir/KeyBinds.sh ;;
        "toggle game mode") $scriptsDir/GameMode.sh ;;
        "toggle light/dark theme") $scriptsDir/DarkLight.sh ;;
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
