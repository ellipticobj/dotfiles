# install oh my zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# install p10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc

# install thunderbird
sudo dnf install thunderbird -y

# install fastfetch
sudo dnf install fastfetch -y

# install vscode
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
sudo dnf install code -y

# install floorp
sudo dnf install floorp -y

read -p "uninstall firefox [Y/n]? " uninstallfirefox

if [["$uninstallfirefox" == "n" || "$uninstallfirefox" == "N"]]; then
	sudo dnf remove firefox
else
	echo "will not remove firefox"
fi

# install gnome-tweaks
sudo dnf install gnome-tweaks -y

read -p "reboot [Y/n]?" response

if [[ "$response" == "n" || "$response" == "N" ]]; then
	echo "reboot for changes to take effect"
else
	echo "rebooting..."
	sudo reboot now
fi
