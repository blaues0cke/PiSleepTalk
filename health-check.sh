#!/bin/bash

echo "Running health check"

usedSpaceInPercent=$(df -k | head -2 | tail -1 | awk '{print $5}' | sed "s/\(\%\)//")

echo "... used space in percent: $usedSpaceInPercent%"

if [ $usedSpaceInPercent -gt 90 ]; then
	echo "... too much space is in use, stopping recording audio"

    sh /usr/sleeptalk/scripts/stop.sh
else

	echo "... enough free disk space available, validating recording service"

	runningProcesses=`ps aux | grep "arecord -D" | wc -l`

	echo "... found services matching our request: $runningProcesses"

	if [ ${runningProcesses} -lt 2 ]; then
		echo "... starting new recording service"

	    sh /usr/sleeptalk/scripts/start.sh
	fi
fi

echo "Done"