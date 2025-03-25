if status is-interactive
    # Commands to run in interactive sessions can go here
end

fish_config theme choose "Rosé Pine {Dawn, Moon}"

set -g fish_greeting

starship init fish | source
thefuck --alias | source

function clear
    command clear
    command fastfetch
end
clear
