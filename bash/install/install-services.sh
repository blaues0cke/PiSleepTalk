#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

echo "Installing services, copying code"

cp /usr/sleeptalk/bash/templates/service-nodejs.sh /etc/init.d/pi-sleeptalk-nodejs
cp /usr/sleeptalk/bash/templates/service-sleeptalk.sh /etc/init.d/pi-sleeptalk-recording

echo "Fixing rights"

chmod 0777 /etc/init.d/pi-sleeptalk-nodejs
chmod 0777 /etc/init.d/pi-sleeptalk-recording

echo "Registering services"

update-rc.d pi-sleeptalk-nodejs defaults
update-rc.d pi-sleeptalk-recording defaults

echo "Done installing services"