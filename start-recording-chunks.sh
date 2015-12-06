#!/bin/bash
#
# Don't call this script directly, its managed by the "sleeptalkrec" service
#

# todo: move this to a settings file

arecord -D plughw:1 --max-file-time=5 -f cd -vv /usr/sleeptalk/records_raw/record.wav