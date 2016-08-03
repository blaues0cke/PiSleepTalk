# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

dir_path="$1"

# Thanks to
# * http://stackoverflow.com/questions/2709458/bash-script-to-replace-spaces-in-file-names
find $dir_path -name "* *" -type d | rename 's/ /_/g'
find $dir_path -name "* *" -type f | rename 's/ /_/g'