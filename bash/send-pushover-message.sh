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

echo "Sending pushover message"

if [ "$push_over_enabled" = true ]; then

	unprocessedFilesPath="${audio_file_path_to_render}/*.${default_audio_format}"
	unprocessedFiles=$(ls -l $unprocessedFilesPath 2> /dev/null | grep -v ^l | wc -l)
	usedSpaceInPercent=$(df -k | head -2 | tail -1 | awk '{print $5}' | sed "s/\(\%\)//")

	if [ "${unprocessedFiles}" -gt "0" ]; then
		echo "... path: ${unprocessedFilesPath}"
		echo "... unprocessed files: ${unprocessedFiles}"
		echo "... used space: ${usedSpaceInPercent}%"

		echo "... initial push text: ${push_over_text}"

		push_over_text=$(echo "${push_over_text}" | sed 's/__unprocessed_files__/'"${unprocessedFiles}"'/g')
		push_over_text=$(echo "${push_over_text}" | sed 's/__used_disk_space__/'"${usedSpaceInPercent}"'/g')
		push_over_text=$(echo "${push_over_text}" | sed 's/%/%25/g')
		push_over_text=$(echo "${push_over_text}" | sed 's/ /%20/g')
		push_over_text=$(echo "${push_over_text}" | sed 's/,/%2C/g')
		push_over_text=$(echo "${push_over_text}" | sed 's/\./%2E/g')

		echo "... final push text: ${push_over_text}"

		final_push_payload="token=${push_over_token}&user=${push_over_user}&message=${push_over_text}"

		echo "... final push payload: ${final_push_payload}"

		curl -s --data "${final_push_payload}" http://api.pushover.net/1/messages.json > /dev/null
	else
		echo "... no unprocessed files"
	fi
else
	echo "... push over support is disabled"
fi