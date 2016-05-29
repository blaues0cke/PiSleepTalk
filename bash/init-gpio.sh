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

echo "Initializing gpio"

gpio mode 0 in
gpio mode 0 up
gpio mode 1 in
gpio mode 1 up
gpio mode 2 out
gpio mode 2 up
gpio mode 3 out
gpio mode 3 up
gpio mode 4 in
gpio mode 4 up

echo "... done!"