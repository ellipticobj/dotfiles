HOME_DIR=$HOME

cp -r ~/.oh-my-zsh ./
cp -r $HOME_DIR/.themes ./
cp -r $HOME_DIR/.icons ./
cp -r $HOME_DIR/.vscode ./
cp -r $HOME_DIR/.wakatime ./
cp -r $HOME_DIR/.config/neofetch ./
cp -r $HOME_DIR/.config/micro ./
cp -r $HOME_DIR/.config/kitty/ ./
cp -r $HOME_DIR/.config/gtk-3.0 ./
cp -r $HOME_DIR/.config/gtk-4.0 ./
cp -r $HOME_DIR/.config/nvim/ ./


cp $HOME_DIR/.shell.pre-oh-my-zsh ./
cp $HOME_DIR/.p10k.zsh ./
cp $HOME_DIR/.wakatime.cfg ./
cp $HOME_DIR/.zshrc ./
cp $HOME_DIR/.zshrc.pre-oh-my-zsh ./
cp $HOME_DIR/.zshrc.zni ./
cp $HOME_DIR/.vimrc ./

dconf dump /org/gnome/terminal/legacy/profiles:/ > gnome-terminal-profiles.dconf
