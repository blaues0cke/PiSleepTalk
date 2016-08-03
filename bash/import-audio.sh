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

echo "Importing audio files"

script_name=`basename "$0"`
lock_file_name="/var/lock/.${script_name}.${lock_file_format}"

if [ ! -d "${lock_file_name}" ]; then
	mkdir "$lock_file_name"

	import_allowed=true

	if [ "$import_allowed" = false ]; then
		# Thanks to
		# 
		files_in_directory=$(ls -1 ${audio_file_path_import} | wc -l)

		if [ ${files_in_directory} -eq 0 ]; then
			echo "... no files to import, disabling importing"

			import_allowed=false
		fi
	else
		echo "... import already disabled, nothing to check here"
	fi

	if [ "$import_allowed" = false ]; then
		# Thanks to
		# * http://stackoverflow.com/questions/14032188/how-to-find-file-accessed-created-just-few-minutes-ago
		changed_files=$(find ${audio_file_path_import} -cmin -${import_dealay_seconds} | wc -l 2>/dev/null)

		if [ ${changed_files} -gt 0 ]; then
			echo "... got files that are new than $import_dealay_seconds seconds, disabling importing"

			import_allovwed=false
		fi
	
	else
		echo "... import already disabled, nothing to check here"
	fi

	if [ "$import_allowed" = false ]; then
		force_file_path="${audio_file_path_import}/.${default_force_import_format}"

		echo "... checking for existing of ${force_file_path}"

		if [ -f ${force_file_path} ]; then
			echo "... force-import file exist, forcing import and removing lockfile"

			import_allowed=true

			rm $force_file_path
		fi
	
	else
		echo "... import already disabled, nothing to check here"
	fi

	if [ "$import_allowed" = false ]; then
		echo "... disallowed to import, aborting"

		rmdir "$lock_file_name"

		exit;
	fi

	echo "... import allowed, starting"

	file_counter=0

	echo "... searching for zip files"

	$(sh /usr/sleeptalk/bash/tool/unzip-zip-files-in-directory.sh $audio_file_path_import)
	$(sh /usr/sleeptalk/bash/tool/unzip-zip-files-in-directory.sh $audio_file_path_import-instant)

	echo "... done searching for zip files"
	echo "... removing whitespaces from filenames"

	$(sh /usr/sleeptalk/bash/tool/remove-whitespaces-from-path.sh $audio_file_path_import)
	$(sh /usr/sleeptalk/bash/tool/remove-whitespaces-from-path.sh $audio_file_path_import-instant)

	echo "... flattening all folders"

	$(sh /usr/sleeptalk/bash/tool/flatten-path.sh $audio_file_path_import)
	$(sh /usr/sleeptalk/bash/tool/flatten-path.sh $audio_file_path_import-instant)

	echo "... looking for audio files"

	dir_list=$(ls ${audio_file_path_import}/* 2>/dev/null)
	for audio_file_path in $dir_list
	do
		echo "... processing: ${audio_file_path}"

		if [ -f $audio_file_path ]; then

			# Thanks to
			# * http://stackoverflow.com/questions/965053/extract-filename-and-extension-in-bash
		 	extension="${audio_file_path##*.}"
		 	file_name="$(basename $audio_file_path | cut -d. -f1)"

			# Thanks to
			# * http://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
			extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

		 	echo "... processing file: ${audio_file_path}, extension: ${extension}, filename: ${file_name}"

		 	random_string=$(cat /dev/urandom | tr -cd 'a-f0-9' | head -c 32)
		 	final_file_name="${file_name}_${random_string}.${default_audio_format}"
		 	final_file_path="${audio_file_path_raw}/${final_file_name}"

		 	echo "... final file name will be: ${final_file_name}"

		 	if [ "$extension" != "${default_audio_format}" ]; then
		 		echo "... transcoding file (${extension}) to ${default_audio_format}"

				# Thanks to
				# * http://spielwiese.la-evento.com/hokuspokus/seite2.html
				ffmpeg -y -i "${audio_file_path}" "${final_file_path}" >>"${error_log_path}" 2>&1

				rm $audio_file_path
		 	else
		 		echo "... file is already in ${default_audio_format} format, we don't have to transcode"

		 		mv $audio_file_path $final_file_path
		 	fi  
		 	
			echo "... done"
			echo ""

			file_counter=$((file_counter + 1))
		fi
	done

	if [ -n "$file_counter" ]; then
	    echo "Done importing audio, added files: ${file_counter}"
	else
		echo "Done importing audio, no files found";
	fi
  	
  	if [ -d "${lock_file_name}" ]; then
  		rmdir "${lock_file_name}"
	fi
else
	echo "... done - existing lock file found"
fi