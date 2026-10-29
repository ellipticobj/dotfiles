sudo pacman -S stow

mv ~/.config ~/.config.bak && mkdir ~/.config

cd ~/dotfiles/ 
stow *
