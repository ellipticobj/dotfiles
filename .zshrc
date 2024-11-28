eval $(thefuck --alias)
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
export PATH="$HOME/.spicetify:$PATH"
export PATH="$HOME/development/flutter/bin:$PATH"
source <(fzf --zsh)