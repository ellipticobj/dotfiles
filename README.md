# my dotfiles

i edited jakoolit's [hyprland dotfiles](https://github.com/jakoolit/hyprland-dots)  

i use this on asahi fedora :thumbsup:

## using the dotfiles
backup your existing `.config` folder and other config files (if you want)
```sh
cp ~/.config ~/.config.bak
cp ~/.vscode ~/.vscode.bak
cp ~/.tmux.conf ~/.tmux.conf.bak
cp ~/.themes ~/.themes.bak
cp ~/.icons ~/.icons.bak
```

install stow
```sh
sudo dnf install stow
sudo apt install stow
sudo pacman -S install stow
```

clone this repo
```sh
git clone https://github.com/ellipticobj/dotfiles.git ~/.dotfiles
```

use stow to apply dotfiles
```
cd ~/.dotfiles && stow -vt . ~
```

verify that everything is symlinked
```sh
ls -la ~/.config
```
