#!/bin/bash

wifi_blocked=$(rfkill list wifi | grep -o "Soft blocked: yes")

if [ -n "$wifi_blocked" ]; then
    rfkill unblock wifi
    notify-send -u low " airplane" " mode off"
else
    rfkill block wifi
    notify-send -u low " airplane" " mode on"
fi
