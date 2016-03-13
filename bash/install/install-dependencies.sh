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

# Thanks to
# * http://unix.stackexchange.com/questions/9940/convince-apt-get-not-to-use-ipv6-method

apt-get update -y -o Acquire::ForceIPv4=true
apt-get upgrade -y -o Acquire::ForceIPv4=true

apt-get install -y -o Acquire::ForceIPv4=true git
apt-get install -y -o Acquire::ForceIPv4=true libasound2-dev
apt-get install -y -o Acquire::ForceIPv4=true build-essential
apt-get install -y -o Acquire::ForceIPv4=true make
apt-get install -y -o Acquire::ForceIPv4=true autoconf
apt-get install -y -o Acquire::ForceIPv4=true libtool
apt-get install -y -o Acquire::ForceIPv4=true nginx
apt-get install -y -o Acquire::ForceIPv4=true bc
apt-get install -y -o Acquire::ForceIPv4=true imagemagick
apt-get install -y -o Acquire::ForceIPv4=true samba samba-common-bin
apt-get install -y -o Acquire::ForceIPv4=true npm --fix-missing

wget https://nodejs.org/dist/v4.0.0/node-v4.0.0-linux-armv6l.tar.gz 
tar -xvf node-v4.0.0-linux-armv6l.tar.gz 
cd node-v4.0.0-linux-armv6l
cp -R * /usr/local/

cd /usr/sleeptalk/frontend

npm install node-gyp --prefix /usr/sleeptalk/frontend 
npm install iniparser --prefix /usr/sleeptalk/frontend
npm install body-parser --prefix /usr/sleeptalk/frontend
npm install express --prefix /usr/sleeptalk/frontend
npm install i18n-2 --prefix /usr/sleeptalk/frontend
npm install basic-auth --prefix /usr/sleeptalk/frontend
npm install glob --prefix /usr/sleeptalk/frontend
npm install diskusage --prefix /usr/sleeptalk/frontend
npm install multer --prefix /usr/sleeptalk/frontend
npm install jade --prefix /usr/sleeptalk/frontend

echo "Done installing dependencies"