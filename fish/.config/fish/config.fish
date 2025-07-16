if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -gx PATH $HOME/.local/bin /usr/local/bin /usr/bin /bin /usr/sbin /sbin $HOME/.cargo/bin $PATH
set -gx GEMINI_API_KEY AIzaSyCO-N-CnWor59AbaWRDEFg2Y8KvNVv6FHI

if test "$TERM" = "linux"
    printf '%b' '\e]P0faf4ed\n\e]P1b4637a\n\e]P256949f\n\e]P3ea9d34\n\e]P4286983\n\e]P5907aa9\n\e]P6d7827e\n\e]P7575279\n\e]P8f2e9e1\n\e]P9b4637a\n\e]PA56949f\n\e]PBea9d34\n\e]PC286983\n\e]PD907aa9\n\e]PEd7827e\n\e]PF575279\n'

    clear
end

if test (uname) = "Darwin"
    eval "$(/opt/homebrew/bin/brew shellenv)"
end

function fish_user_key_bindings

end

# sources ~/.env
# no quotes or spaces around ''
if test -f ~/.env
    for line in (cat ~/.env)
        if test -n "$line" && not string match -q "#*" $line
            set -l key (string split -m 1 '=' $line)[1]
            set -l value (string split -m 1 '=' $line)[2]
            set -gx $key $value
        end
    end
end

# check for dependencies
for cmd in starship thefuck fastfetch tmux
    if not command -v $cmd >/dev/null
        echo "warning: $cmd is not installed"
    end
end

if command -v starship >/dev/null
    starship init fish | source
end

if command -v thefuck >/dev/null
    thefuck --alias | source
end

if command -v pyenv >/dev/null
    pyenv init - fish | source
end

function clear
    command clear
    if command -v fastfetch >/dev/null
        command fastfetch
    end
end

fish_config theme choose "Rosé Pine Dawn"
set -g fish_greeting

fastfetch



# Added by `rbenv init` on Mon 23 Jun 2025 14:42:28 +08
status --is-interactive; and rbenv init - --no-rehash fish | source
