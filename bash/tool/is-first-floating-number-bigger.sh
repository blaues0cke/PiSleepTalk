#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#

# Thanks to
# * http://stackoverflow.com/questions/8654051/how-to-compare-two-floating-point-numbers-in-a-bash-script
# * http://stackoverflow.com/questions/24896433/assigning-the-result-of-test-to-a-variable
is_first_floating_number_bigger () {

	. /usr/sleeptalk/config/config.cfg

	number1="$1"
	number2="$2"

	echo "... is_first_floating_number_bigger: comparing ${number1} with ${number2} (to check if the first one is bigger)"

	[ ${number1%.*} -eq ${number2%.*} ] && [ ${number1#*.} \> ${number2#*.} ] || [ ${number1%.*} -gt ${number2%.*} ];
	result=$?
	if [ "$result" -eq 0 ]; then result=1; else result=0; fi

	echo "... is_first_floating_number_bigger: result is: ${result}"

	if [ "$result" -eq 0 ]; then
		echo "... is_first_floating_number_bigger: ${number1} is not bigger than ${number2}"
	else
		echo "... is_first_floating_number_bigger: ${number1} is bigger than ${number2}"
	fi

	__FUNCTION_RETURN="${result}"
}