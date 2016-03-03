# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

mkdir /usr/sleeptalk

wget -O /usr/sleeptalk/sleeptalk.zip https://github.com/blaues0cke/PiSleepTalk/archive/master.zip

unzip /usr/sleeptalk/sleeptalk.zip -d /usr/sleeptalk

cp -rf /usr/sleeptalk/PiSleepTalk-master/* /usr/sleeptalk

rm -rf /usr/sleeptalk/PiSleepTalk-master

rm /usr/sleeptalk/sleeptalk.zip



echo "done"