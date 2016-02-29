#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/config/config.cfg

echo ""
echo ""
echo "  _____  _   _____  _                  _______      _  _    "
echo " |  __ \(_) / ____|| |                |__   __|    | || |   "
echo " | |__) |_ | (___  | |  ___   ___  _ __  | |  __ _ | || | __"
echo " |  ___/| | \___ \ | | / _ \ / _ \| '_ \ | | / _\` || || |/ /"
echo " | |    | | ____) || ||  __/|  __/| |_) || || (_| || ||   < "
echo " |_|    |_||_____/ |_| \___| \___|| .__/ |_| \__,_||_||_|\_\\"
echo "                                  | |                       "
echo " by Thomas Kekeisen               |_|                       "
echo ""
echo ""
echo "... welcome to the PiSleepTalk installation script"
echo "... if everything works fine you have nothing to do"
echo "... press RETURN to start"

# Thanks to
# * http://stackoverflow.com/questions/226703/how-do-i-prompt-for-input-in-a-linux-shell-script
read input















# Thanks to
# * http://unix.stackexchange.com/questions/8518/how-to-get-my-own-ip-address-and-save-it-to-a-variable-in-a-shell-script
ipAddress=$(ifconfig | grep -A 1 'wlan0' | tail -1 | cut -d ':' -f 2 | cut -d ' ' -f 1)

echo "... thanks, everything is done"
echo "... visit http://${ipAddress}:${web_port} to access the web interface"
echo ""





# copy daemon.sh to /etc/init.d/sleeptalk
# start the service
# copy the crontabs
# create folders
#
#
# install/install-crontabs.sh
# install/install-ffmpeg.sh
# install/install-samba-config.sh
# install/install-services.sh
# install/install-test-data.sh
# install/install-hostname.sh
#
#
#
#
#

# sudo apt-get install imagemagick
# install-samba-config.sh

# Thanks to
# * https://www.raspberrypi.org/forums/viewtopic.php?f=8&t=5988
# sudo apt-get install bc
# ffmpeg
# sudo bash  install_ffmpeg.sh 

# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
# nvm install 5.2.0

# sudo apt-get install npm --fix-missing

# sudo chmod 777 -R frontend
# $ sudo chmod 777 -R /usr/sleeptalk/
# npm install diskusage

# 