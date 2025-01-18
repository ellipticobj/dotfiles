sudo cp -r ~/.oh-my-zsh ./
sudo cp -r ~/.themes ./
cp -r ~/.icons ./
cp -r ~/.vscode ./
cp -r ~/.wakatime ./
cp -r ~/.thunderbird ./
cp -r ~/.config/micro ./
cp -r ~/.config/gtk-3.0 ./
cp -r ~/.config/gtk-4.0 ./
cp -r ~/.config/nvim ./
cp -r ~/powerlevel10k ./


cp ~/.shell.pre-oh-my-zsh ./
cp ~/.p10k.zsh ./
cp ~/.wakatime.cfg ./
cp ~/.zshrc ./
cp ~/.zshrc.pre-oh-my-zsh ./
cp ~/.zshrc.zni ./

dconf dump /org/gnome/terminal/legacy/profiles:/ > gnome-terminal-profiles.dconf
