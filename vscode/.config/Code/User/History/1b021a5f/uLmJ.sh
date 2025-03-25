#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Rofi menu for KooL Hyprland Quick Settings (SUPER SHIFT E)

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
msg=' ⁉️ Choose what to do ⁉️'
iDIR="$HOME/.config/swaync/images"
scriptsDir="$HOME/.config/hypr/scripts"
userscripts="$HOME/.config/hypr/userscripts"

# Function to display the menu options without numbers
menu() {
    cat <<EOF
view/edit User Defaults
view/edit ENV variables
view/edit Window Rules
view/edit User Keybinds
view/edit User Settings
view/edit Startup Apps
view/edit Decorations
view/edit Animations
view/edit Laptop Keybinds
view/edit Default Keybinds
Choose Kitty Terminal Theme
Configure Monitors (nwg-displays)
Configure Workspace Rules (nwg-displays)
GTK Settings (nwg-look)
QT Apps Settings (qt6ct)
QT Apps Settings (qt5ct)
Choose Hyprland Animations
Choose Monitor Profiles
Choose Rofi Themes
Search for Keybinds
Toggle Game Mode
Switch Dark-Light Theme
EOF
}

# Main function to handle menu selection
main() {
    choice=$(menu | rofi -i -dmenu -config $rofi_theme -mesg "$msg")
    
    # Map choices to corresponding files
    case "$choice" in
        "view/edit user defaults") file="$userconfigs/01-userDefaults.conf" ;;
        "view/edit environment variables") file="$userconfigs/envariables.conf" ;;
        "view/edit window rules") file="$userconfigs/WindowRules.conf" ;;
        "view/edit user keybinds") file="$userconfigs/UserKeybinds.conf" ;;
        "view/edit user settings") file="$userconfigs/UserSettings.conf" ;;
        "view/edit startup Apps") file="$userconfigs/startupApps.conf" ;;
        "view/edit decorations") file="$userconfigs/UserDecorations.conf" ;;
        "view/edit animations") file="$userconfigs/UserAnimations.conf" ;;
        "view/edit default keybinds") file="$configs/Keybinds.conf" ;;
        "choose kitty terminal theme") $scriptsDir/Kitty_themes.sh ;;
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
		"QT app settings (qt5ct)") 
            if ! command -v qt5ct &>/dev/null; then
                notify-send -i "$iDIR/error.png" "E-R-R-O-R" "Install qt5ct first"
                exit 1
            fi
            qt5ct ;;
        "choose hyprland animations") $scriptsDir/Animations.sh ;;
        "choose Monitor Profiles") $scriptsDir/MonitorProfiles.sh ;;
        "choose Rofi Themes") $scriptsDir/RofiThemeSelector.sh ;;
        "search for Keybinds") $scriptsDir/KeyBinds.sh ;;
        "toggle game mode") $scriptsDir/GameMode.sh ;;
        "toggle light theme") $scriptsDir/DarkLight.sh ;;
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