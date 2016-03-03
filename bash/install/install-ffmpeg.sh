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

function install_build_tools {

	apt-get install -y git
	apt-get install -y libasound2-dev
	apt-get install -y build-essential
	apt-get install -y make
	apt-get install -y autoconf
	apt-get install -y libtool
	apt-get install -y nginx
}

function build_yasm {
	
	echo "Building yasm..."

    # an assembler used by x264 and ffmpeg
    cd /usr/src

    wget http://www.tortall.net/projects/yasm/releases/yasm-1.2.0.tar.gz
    tar xzvf yasm-1.2.0.tar.gz
    cd yasm-1.2.0
    ./configure
    make
    make install
}

function build_h264 {
    # h.264 video encoder

    echo "Building h264"

    cd /usr/src
    git clone git://git.videolan.org/x264
    cd x264

    ./configure --disable-asm --enable-shared
    make
    make install
}

function build_lame {
    # mp3 audio encoder

	echo "Building lame"

    cd /usr/src
    wget http://downloads.sourceforge.net/project/lame/lame/3.99/lame-3.99.tar.gz
    tar xzvf lame-3.99.tar.gz
    cd lame-3.99
    ./configure
    make
    make install
}

function build_faac {
    # aac encoder

    echo "Building faac"

    cd /usr/src
    curl -#LO http://downloads.sourceforge.net/project/faac/faac-src/faac-1.28/faac-1.28.tar.gz
    tar xzvf faac-1.28.tar.gz
    cd faac-1.28
    ./configure
    make
    make install
}

function build_ffmpeg {

	echo "Building ffmpeg"

    cd /usr/src/
    git clone git://source.ffmpeg.org/ffmpeg.git
    cd ffmpeg      
    ./configure --enable-shared --enable-gpl --prefix=/usr --enable-nonfree --enable-libmp3lame --enable-libfaac --enable-libx264 --enable-version3 --disable-mmx
    make
    make install
}

function configure_ldconfig {

	echo "Building ldconfig"

    echo "/usr/local/lib" > /etc/ld.so.conf.d/libx264.conf
    ldconfig
}

function build_psips {
  git clone git://github.com/AndyA/psips.git
  cd psips
  ./setup.sh && ./configure && make && make install
}

install_build_tools
build_yasm
build_h264
build_lame
build_faac
build_ffmpeg
configure_ldconfig
build_psips 