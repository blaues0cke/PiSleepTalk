#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

echo "Installing WiringPi"

sudo apt-get install git-core

mkdir /tmp/wiringpi
cd /tmp/wiringpi

git clone git://git.drogon.net/wiringPi

cd wiringPi
git pull origin

./build

rm -rf /tmp/wiringpi

echo "Done installing WiringPi"