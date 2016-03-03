# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

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
echo "... welcome to the PiSleepTalk source downloader"
echo "... if everything works fine you have nothing to do"
echo "... press RETURN to start, or STRG+C to cancel"

echo "... creating root folder"
mkdir /usr/sleeptalk

echo "... downloading source code"
wget -O /usr/sleeptalk/sleeptalk.zip https://github.com/blaues0cke/PiSleepTalk/archive/master.zip

echo "... unzipping source code"
unzip /usr/sleeptalk/sleeptalk.zip -d /usr/sleeptalk

echo "... fixing folder structure"
cp -rf /usr/sleeptalk/PiSleepTalk-master/* /usr/sleeptalk
rm -rf /usr/sleeptalk/PiSleepTalk-master

echo "... removing downloaded zip file"
rm /usr/sleeptalk/sleeptalk.zip

echo "Done! Installing PiSleepTalk now."

sh /usr/sleeptalk/bash/install.sh