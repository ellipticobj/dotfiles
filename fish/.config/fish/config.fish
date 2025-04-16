if status is-interactive
    # Commands to run in interactive sessions can go here
end

function fish_user_key_bindings
    if not set -q TMUX
        echo "fish_user_key_bindings executed"
        echo "\$TMUX: $TMUX"
        if status is-interactive
            echo "attempting to start or attach tmux"
            # sleep 0.1
            tmux 
        else
            # echo "not starting tmux: interactive=$status_is_interactive, TMUX set=$(set -q TMUX)"
        end
    end
end

fish_config theme choose "Rosé Pine Dawn"

set -g fish_greeting

starship init fish | source
thefuck --alias | source

function clear
    command clear
    command fastfetch
end

fastfetch
