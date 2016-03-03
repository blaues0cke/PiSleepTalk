#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Vitek Tajzich
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

echo "Installing dependencies"

apt-get install -y bc
apt-get install -y imagemagick
apt-get install -y samba samba-common-bin
apt-get install -y npm --fix-missing

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
nvm install 5.2.0

cd /usr/sleeptalk/frontend

npm install diskusage

echo "Done installing dependencies"