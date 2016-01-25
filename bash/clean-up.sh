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

rm -rf "${audio_file_path_raw}/*"
rm -rf "${audio_file_path_timestamp}/*"
rm -rf "${audio_file_path_amplitude}/*"
rm -rf "${audio_file_path_rendered}/*"
rm -rf "${audio_file_path_to_render}/*"
rm -rf "${audio_file_path_decrease_volume}/*"
rm -rf "${audio_file_path_increase_volume}/*"
rm -rf "${audio_file_path_final}/*"