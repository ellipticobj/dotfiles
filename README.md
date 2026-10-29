# dotfiles

arch dotfiles managed with gnu stow

## fresh install

run:

```bash
git clone https://github.com/ellipticobj/dotfiles.git  ~/dotfiles/ && cd ~/dotfiles && ./bootstrap.sh
```

OR

download/install prerequisites

```bash
sudo pacman -S git stow
git clone http://github.com/ellipticobj/dotfiles.git ~/dotfiles
```

backup current .config

```bash
mv ~/.config ~/.config.bak && mkdir ~/.config
```

symlink dotfiles

```bash
cd ~/dotfiles
stow *
```

## structure

```
~/dotfiles/
├── .bashrc                    # stowed to ~/.bashrc
├── .local/bin/                # stowed to ~/.local/bin/
├── .config/xyz/               # stowed to ~/.config/xyz/
├── bootstrap.sh               # fresh setup
├── install.sh                 # package installer (git + stow + paru prereqs)
├── pkglist.txt                # official packages
├── aurlist.txt                # AUR packages
└── gitssh.sh                  # SSH key setup
```
