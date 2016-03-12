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
echo "... press RETURN to start, or STRG+C to cancel"

# Thanks to
# * http://stackoverflow.com/questions/226703/how-do-i-prompt-for-input-in-a-linux-shell-script
read input

sh /usr/sleeptalk/bash/install/install-folders.sh       # Sucessfully tested
sh /usr/sleeptalk/bash/install/install-step.sh

sh /usr/sleeptalk/bash/install/install-dependencies.sh  # Fixed, not finally tested
sh /usr/sleeptalk/bash/install/install-step.sh

sh /usr/sleeptalk/bash/install/install-crontabs.sh      # Sucessfully tested 
sh /usr/sleeptalk/bash/install/install-step.sh
 
sh /usr/sleeptalk/bash/install/install-services.sh 	    # Sucessfully tested
sh /usr/sleeptalk/bash/install/install-step.sh
 
sh /usr/sleeptalk/bash/install/install-samba-config.sh  # Sucessfully tested
sh /usr/sleeptalk/bash/install/install-step.sh
 
sh /usr/sleeptalk/bash/install/install-hostname.sh      # Sucessfully tested
sh /usr/sleeptalk/bash/install/install-step.sh
 
bash /usr/sleeptalk/bash/install/install-ffmpeg.sh      # 
sh /usr/sleeptalk/bash/install/install-step.sh
 
sh /usr/sleeptalk/bash/install/install-wiring-pi.sh     # Sucessfully tested
sh /usr/sleeptalk/bash/install/install-step.sh
 

# Thanks to
# * http://unix.stackexchange.com/questions/8518/how-to-get-my-own-ip-address-and-save-it-to-a-variable-in-a-shell-script
ipAddress=$(ifconfig | grep -A 1 'wlan0' | tail -1 | cut -d ':' -f 2 | cut -d ' ' -f 1)

echo "... thanks, everything is done"
echo "... visit http://${ipAddress}:${web_port} to access the web interface"
echo ""

echo "... press RETURN to reboot your Raspberry Pi, or STRG+C to cancel"

# Thanks to
# * http://stackoverflow.com/questions/226703/how-do-i-prompt-for-input-in-a-linux-shell-script
read input

reboot
