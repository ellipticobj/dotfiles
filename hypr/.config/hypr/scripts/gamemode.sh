#!/bin/bash

SCRIPTSDIR="$HOME/.config/hypr/scripts"

HYPRGAMEMODE=$(hyprctl getoption animations:enabled | awk 'NR==1{print $2}')
if [ "$HYPRGAMEMODE" = 1 ] ; then
	hyprctl keyword "windowrule opacity 1 override 1 override 1 override, ^(.*)$"
    swww kill 
    notify-send -e -u low " gamemode enabled"
    exit
else
	swww-daemon --format xrgb && swww img "$HOME/.config/rofi/.current_wallpaper" &
	sleep 0.1
	${SCRIPTSDIR}/wallustswww.sh
	sleep 0.5
	${SCRIPTSDIR}/refresh.sh	 
    notify-send -e -u normal " gamemode disabled"
    exit
fi
hyprctl reload
