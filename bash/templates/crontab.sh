# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

#
# Init the gpio interface
#
@reboot     root           sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/init-gpio.sh

#
# Clear lock files at startup
#
@reboot     root           sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/clean-lock-files.sh

#
# Will check the free disk space and the service persistance every 60s
# 
# No "run-singleton.sh" is used here since this would disable the "stop" feature since a instance
# of "health-check.sh" is running until the recording stops.
#
# Uncomment more lines to get a faster response to buttons and the rules you set to
# start a automated recording. Beware: You may run against some rate limits when you use the
# swarm or last.fm api.
#
*   *  * * * root            sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep  5;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 10;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 15;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 20;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 25;  sh /usr/sleeptalk/bash/health-check.sh
*   *  * * * root sleep 30;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 35;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 40;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 45;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 50;  sh /usr/sleeptalk/bash/health-check.sh
# *   *  * * * root sleep 55;  sh /usr/sleeptalk/bash/health-check.sh

#
# Will add the timestamp to the filename every 15 seconds
#
*   *  * * * root            sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh
*   *  * * * root sleep 15;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh
*   *  * * * root sleep 30;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh
*   *  * * * root sleep 45;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-timestamp-to-filename.sh

#
# Will add the amplitude to the filename every 15 seconds
#
*   *  * * * root sleep 10;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh
*   *  * * * root sleep 25;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh
*   *  * * * root sleep 40;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh
*   *  * * * root sleep 55;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/add-amplitude-to-filename.sh

#
# Will decrease and increase the volume of audio files every 15 seconds
#
*   *  * * * root sleep 12;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-volume.sh
*   *  * * * root sleep 27;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-volume.sh
*   *  * * * root sleep 42;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-volume.sh
*   *  * * * root sleep 57;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-volume.sh

#
# Will crop audio files every 15 seconds
#
*   *  * * * root sleep 14;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/crop-audio.sh
*   *  * * * root sleep 29;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/crop-audio.sh
*   *  * * * root sleep 44;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/crop-audio.sh
*   *  * * * root sleep 59;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/crop-audio.sh

#
# Will process noise parts every 15 seconds
#
*   *  * * * root sleep 01;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-noise.sh
*   *  * * * root sleep 16;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-noise.sh
*   *  * * * root sleep 31;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-noise.sh
*   *  * * * root sleep 46;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-noise.sh

#
# Will process files to import every 15 seconds
#
*   *  * * * root sleep 03;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/import-audio.sh
*   *  * * * root sleep 18;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/import-audio.sh
*   *  * * * root sleep 33;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/import-audio.sh
*   *  * * * root sleep 48;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/import-audio.sh

#
# Will process the records every minute
#
*   *  * * * root sleep 5;   sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/process-records.sh

#
# Will concat full movies
#
*   *  * * * root sleep 05;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/render-video.sh
*   *  * * * root sleep 20;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/render-video.sh
*   *  * * * root sleep 35;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/render-video.sh
*   *  * * * root sleep 50;  sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/render-video.sh

#
# Will create images for every frame every 5 minutes
#
*/5 *  * * * root            sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/create-frame-images.sh

#
# Will render videos every 5 minutes
#
*/5 *  * * * root sleep 300; sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/generate-video.sh

#
# Will remove unused images every 2 minutes
#
*/2 *  * * * root            sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/clean-images.sh

#
# Will clean the lock files every day at 16:02
#
2   16 * * * root sleep 300; sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/clean-lock-files.sh

#
# Will clean the lock files every day at 10:15
#
15   10 * * * root sleep 300; sh /usr/sleeptalk/bash/run-singleton.sh /usr/sleeptalk/bash/send-pushover-message.sh



