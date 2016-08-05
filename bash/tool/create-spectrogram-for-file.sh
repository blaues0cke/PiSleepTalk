#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

. /usr/sleeptalk/bash/tool/change-file-extension.sh

create_spectrogram_for_file () {

	. /usr/sleeptalk/config/config.cfg

	file="$1"

	change_file_extension $file $default_image_format
	spectrogram_filename="${__FUNCTION_RETURN}"

	echo "... create_spectrogram_for_file: will create spectrogram: ${file}"

	# Thanks to
	# * http://stackoverflow.com/questions/9956815/generate-visual-waveform-from-mp3-wav-file-in-windows-2008-server
	sox $file -n spectrogram -Y 150 -l -r -h -p 1 -x 1000 -a -o "${spectrogram_filename}" >>"${error_log_path}" 2>&1

	echo "... create_spectrogram_for_file: created spectrogram: ${spectrogram_filename}"

	__FUNCTION_RETURN="${spectrogram_filename}"
}