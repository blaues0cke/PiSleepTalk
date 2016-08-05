#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/bash/tool/change-file-directory.sh
. /usr/sleeptalk/bash/tool/create-spectrogram-for-file.sh

create_record_to_render () {

	. /usr/sleeptalk/config/config.cfg

	file="$1"

	echo "... create_record_to_render: processing file: ${file}"

	change_file_directory $file $audio_file_path_to_render
	
	final_path="${__FUNCTION_RETURN}"

	echo "... create_record_to_render: moving ${file} to ${final_path}"

	mv $file $final_path

	create_spectrogram_for_file $final_path

	__FUNCTION_RETURN="${final_path}"
}