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

echo "Installing folders"

#mkdir /usr/sleeptalk (this folder is already generated when this script runs)
mkdir /usr/sleeptalk/cache
mkdir /usr/sleeptalk/debug
#mkdir /usr/sleeptalk/frontend (this folder is already in the zip file)
mkdir /usr/sleeptalk/noise-data
mkdir /usr/sleeptalk/scripts
mkdir /usr/sleeptalk/records-amplitude
mkdir /usr/sleeptalk/records-crop
mkdir /usr/sleeptalk/records-decrease-volume
mkdir /usr/sleeptalk/records-import
chmod 0777 /usr/sleeptalk/records-import-instant
mkdir /usr/sleeptalk/records-increase-volume
mkdir /usr/sleeptalk/records-final
mkdir /usr/sleeptalk/records-raw
mkdir /usr/sleeptalk/records-rendered
mkdir /usr/sleeptalk/records-timestamp
mkdir /usr/sleeptalk/records-to-render
mkdir /usr/sleeptalk/test-data

chmod 0777 /usr/sleeptalk
chmod 0777 /usr/sleeptalk/cache
chmod 0777 /usr/sleeptalk/debug
chmod 0777 /usr/sleeptalk/frontend
chmod 0777 /usr/sleeptalk/noise-data
chmod 0777 /usr/sleeptalk/scripts
chmod 0777 /usr/sleeptalk/records-amplitude
chmod 0777 /usr/sleeptalk/records-crop
chmod 0777 /usr/sleeptalk/records-decrease-volume
chmod 0777 /usr/sleeptalk/records-import
chmod 0777 /usr/sleeptalk/records-import-instant
chmod 0777 /usr/sleeptalk/records-increase-volume
chmod 0777 /usr/sleeptalk/records-final
chmod 0777 /usr/sleeptalk/records-raw
chmod 0777 /usr/sleeptalk/records-rendered
chmod 0777 /usr/sleeptalk/records-timestamp
chmod 0777 /usr/sleeptalk/records-to-render
chmod 0777 /usr/sleeptalk/test-data

echo "Done installing folders"