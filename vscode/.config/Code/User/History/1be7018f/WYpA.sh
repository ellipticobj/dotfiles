#!/bin/bash

# Define the path to the config file
config_file=$HOME/.config/hypr/configs/userdefaults.conf

# Check if the config file exists
if [[ ! -f "$config_file" ]]; then
    echo "error: configuration file not found!"
    exit 1
fi

# Process the config file in memory, removing the $ and fixing spaces
config_content=$(sed 's/\$//g' "$config_file" | sed 's/ = /=/')

# Source the modified content directly from the variable
eval "$config_content"

# Check if $term is set correctly
if [[ -z "$searchengine" ]]; then
    echo "error: \$search engine is not set in the configuration file!"
    exit 1
fi

# Rofi theme and message
rofi_theme="$HOME/.config/rofi/config-search.rasi"
msg='web search'

# Kill Rofi if already running before execution
if pgrep -x "rofi" >/dev/null; then
    pkill rofi
fi

# Open Rofi and pass the selected query to xdg-open for Google search
echo "" | rofi -dmenu -config "$rofi_theme" -mesg "$msg" | xargs -I{} xdg-open $Search_Engine