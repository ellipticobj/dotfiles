#!/bin/bash

# Variables
music="$HOME/Music/"
images="$HOME/.config/swaync/icons"
rofi_theme="$HOME/.config/rofi/rofi-beats.rasi"
rofi_theme_1="$HOME/.config/rofi/rofi-beats-menu.rasi"

# Online Stations. Edit as required
declare -A online_music=(
  ["vibesss"]="https://www.youtube.com/playlist?list=PL75byKqj-N6VnEi1eXZsdT27-_UOimd8O"
)

# Populate local_music array with files from music directory and subdirectories
populate_local_music() {
  local_music=()
  filenames=()
  while IFS= read -r file; do
    local_music+=("$file")
    filenames+=("$(basename "$file")")
  done < <(find -L "$music" -type f \( -iname "*.mp3" -o -iname "*.flac" -o -iname "*.wav" -o -iname "*.ogg" -o -iname "*.mp4" \))
}

# Function for displaying notifications
notification() {
  notify-send -u normal -i "$images/music.png" "now playing:" "$@"
}

# Main function for playing local music
play_local_music() {
  populate_local_music

  # Prompt the user to select a song
  choice=$(printf "%s\n" "${filenames[@]}" | rofi -i -dmenu -config $rofi_theme)

  if [ -z "$choice" ]; then
    exit 1
  fi

  # Find the corresponding file path based on user's choice and set that to play the song then continue on the list
  for (( i=0; i<"${#filenames[@]}"; ++i )); do
    if [ "${filenames[$i]}" = "$choice" ]; then
		
      notification "$choice"
      mpv --playlist-start="$i" --loop-playlist --vid=no  "${local_music[@]}"

      break
    fi
  done
}

# Main function for shuffling local music
shuffle_local_music() {
  notification "shuffle play local music"

  # Play music in $music on shuffle
  mpv --shuffle --loop-playlist --vid=no "$music"
}

# Main function for playing online music
play_online_music() {
  choice=$(for online in "${!online_music[@]}"; do
      echo "$online"
    done | sort | rofi -i -dmenu -config "$rofi_theme")

  if [ -z "$choice" ]; then
    exit 1
  fi

  link="${online_music[$choice]}"

  notification "$choice"
  
  # Play the selected online music using mpv
  mpv --shuffle --vid=no "$link"
}

# Function to stop music and kill mpv processes
stop_music() {
  mpv_pids=$(pgrep -x mpv)

  if [ -n "$mpv_pids" ]; then
    # Get the PID of the mpv process used by mpvpaper (using the unique argument added)
    mpvpaper_pid=$(ps aux | grep -- 'unique-wallpaper-process' | grep -v 'grep' | awk '{print $2}')

    for pid in $mpv_pids; do
      if ! echo "$mpvpaper_pid" | grep -q "$pid"; then
        kill -9 $pid || true 
      fi
    done
    notify-send -u low -i "$images/music.png" "music stopped" || true
  fi
}

# Check if music is already playing
if pgrep -x "mpv" > /dev/null; then
  stop_music
else
  user_choice=$(printf "play from online stations\nplay from music directory\nshuffle play from music directory" | rofi -dmenu -config $rofi_theme_1)

  echo "user choice: $user_choice"

  case "$user_choice" in
    "play from music directory")
      play_local_music
      ;;
    "play from online stations")
      play_online_music
      ;;
    "shuffle play from music directory")
      shuffle_local_music
      ;;
    *)
      ;;
  esac
fi