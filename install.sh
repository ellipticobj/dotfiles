sudo cp -r ./.oh-my-zsh ~/
cp -r ./.themes ~/
cp -r ./.icons ~/
cp -r ./.vscode ~/
cp -r ./.wakatime ~/
cp -r ./.thunderbird ~/
cp -r ./.config/micro ~/.config/
cp -r ./.config/gtk-3.0 ~/.config/
cp -r ./.config/gtk-4.0 ~/.config/
cp -r ./.config/nvim ~/.config/

cp ./.shell.pre-oh-my-zsh ~/
cp ./.p10k.zsh ~/
cp ./.wakatime.cfg ~/
cp ./.zshrc ~/
cp ./.zshrc.pre-oh-my-zsh ~/
cp ./.zshrc.zni ~/

dconf load /org/gnome/terminal/legacy/profiles:/ < gnome-terminal-profiles.dconf
