#!/bin/bash

# 
# This file is part of PiSleepTalk.
# Learn more at: https://github.com/blaues0cke/PiSleepTalk
# 
# Author:  Vitek Tajzich
# Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
# License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
#          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
#
# Thanks to
# * https://gist.github.com/vtajzich/7577876

# Thanks to
# * http://stackoverflow.com/questions/6481005/how-to-obtain-the-number-of-cpus-cores-in-linux-from-the-command-line
cpu_count=$(grep -c ^processor /proc/cpuinfo)




echo "Building yasm..."

# an assembler used by x264 and ffmpeg
cd /usr/src

wget http://www.tortall.net/projects/yasm/releases/yasm-1.2.0.tar.gz
tar xzvf yasm-1.2.0.tar.gz
cd yasm-1.2.0
./configure
make -j $cpu_count
make install



# h.264 video encoder

echo "Building h264"

cd /usr/src
git clone git://git.videolan.org/x264
cd x264

./configure --disable-asm --enable-shared
make -j $cpu_count
make -j $cpu_count install





# mp3 audio encoder

echo "Building lame"

cd /usr/src
wget http://downloads.sourceforge.net/project/lame/lame/3.99/lame-3.99.tar.gz
tar xzvf lame-3.99.tar.gz
cd lame-3.99
./configure
make -j $cpu_count
make -j $cpu_count install


# aac encoder

echo "Building faac"

cd /usr/src
curl -#LO http://downloads.sourceforge.net/project/faac/faac-src/faac-1.28/faac-1.28.tar.gz
tar xzvf faac-1.28.tar.gz
cd faac-1.28
./configure
make -j $cpu_count
make -j $cpu_count install




echo "Building ffmpeg"

cd /usr/src/
git clone git://source.ffmpeg.org/ffmpeg.git
cd ffmpeg      
./configure --enable-shared --enable-gpl --prefix=/usr --enable-nonfree --enable-libmp3lame --enable-libfaac --enable-libx264 --enable-version3 --disable-mmx
make -j $cpu_count
make -j $cpu_count install




echo "Building ldconfig"

echo "/usr/local/lib" > /etc/ld.so.conf.d/libx264.conf
ldconfig




git clone git://github.com/AndyA/psips.git
cd psips
./setup.sh && ./configure && make && make install


