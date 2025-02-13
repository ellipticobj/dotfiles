# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi


export ZSH="$HOME/.oh-my-zsh"

plugins=(
	git
	zsh-autosuggestions
	zsh-syntax-highlighting
	fast-syntax-highlighting
	zsh-autocomplete
)

source $ZSH/oh-my-zsh.sh
source ~/powerlevel10k/powerlevel10k.zsh-theme

# check the dnf plugins commands here
# https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dnf


# Display Pokemon-colorscripts
# Project page: https://gitlab.com/phoneybadger/pokemon-colorscripts#on-other-distros-and-macos
#pokemon-colorscripts --no-title -s -r

# fastfetch. Will be disabled if above colorscript was chosen to install
fastfetch

# Set-up FZF key bindings (CTRL R for fuzzy history finder)
source <(fzf --zsh)

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

# Set-up icons for files/folders in terminal using eza

[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
export PATH=$HOME/.local/bin:$PATH
export BOX64_LD_LIBRARY_PATH=/usr/lib64/libgcc_s.so.1

alias clear="clear && fastfetch"
