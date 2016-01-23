# Documentation

The idea behind this project was to provide a "should work out of the box" solution to make a Raspberry Pi record what you are talking while sleeping.
Beware, this project is **work in progress**, see [our issue tracker](https://github.com/blaues0cke/PiSleepTalk/issues) to see whats going on.


## Installation

TODO

## File system

* `/usr/sleeptalk/debug` A folder that contains debug output, not required for production mode
* `/usr/sleeptalk/frontend` Contains the whole node.js frontend
* `/usr/sleeptalk/scripts` Contains all bash scripts
* `/usr/sleeptalk/records-amplitude`
* `/usr/sleeptalk/records-decrease_volume`
* `/usr/sleeptalk/records-import`
* `/usr/sleeptalk/records-increase_volume`
* `/usr/sleeptalk/records-final`
* `/usr/sleeptalk/records-raw`
* `/usr/sleeptalk/records-rendered`
* `/usr/sleeptalk/records-timestamp`
* `/usr/sleeptalk/records-to-render`
* `/usr/sleeptalk/test-data` Just contains test data I need to implemenet the whole stuff

All folders that contain record data have to start with `record-` since the status page only watches folders starting with this prefix.

## Workflow

Files are processed in the following folders:
 
1. `/usr/sleeptalk/records-import` put audio files to want to import in the system in this folde using samba. It will processed like it is a recording made from your Raspberry Pi.s
2. `/usr/sleeptalk/records-raw` contains all raw audio chunks recorded by `record-chunks.sh`.
3. `/usr/sleeptalk/records-timestamp` contains all audio chunks added with a timestamp by `add-timestamp-to-filename.sh`.
4. `/usr/sleeptalk/records-amplitude` contains all audio chunks added with its amplitude data by `add-amplitude-to-filename.sh`.
5. `/usr/sleeptalk/records-to-render`. contains all data that is required to render a video.
6. `/usr/sleeptalk/records-decrease-volume` the volume of all files in this folder is decreased by 50% by `process-volume.sh`. All processed files are moved back to `/usr/sleeptalk/records-to-render`.
7. `/usr/sleeptalk/records-increase-volume` the volume of all files in this folder is increased by 50% by `process-volume.sh`. All processed files are moved back to `/usr/sleeptalk/records-to-render`.
8. `/usr/sleeptalk/records-rendered` contains finally rendered videos including their subtitles.
9. `/usr/sleeptalk/records-final` contains upload ready videos build by concating multiple rendered records.

## Audio detection and rating logic

There are some rules that control the way a recording is generated, basically:

* The whole recording is dropped when it contains more than 50 chunks
* A valid recording is enclosed by two records that were too quiet to make sure we got everything you spoke on tape
* A chunk is always limited to 5 seconds

## .sleeptalk format

I needed to implement a simple format to transmit the text data from node.js to the bash part of PiSleepTalk.
For this reason the following format exists. It just contains the frame count and the corresponding text, like this:

	0000|First text at second 0
	0015|Follows after 1 second
	0060|Appears after 4 seconds from start

## Hardware

I am using the following hardware, but I think the most Raspberry Pi models, WiFi sticks, usb-microphones should work. Feel free to click on [this link](https://einkaufen.gooding.de/toolbox-bodensee-e-v-33513) before you buy the stuff, so our non-profit hackspace [Toolbox Bodensee e.V.](http://toolbox-bodensee.de) will get a commission.

* [Raspberry Pi 2](http://www.amazon.de/gp/product/B00T2U7R7I)
* [Power supply (2000mA)](http://www.amazon.de/gp/product/B00FA2V318)
* [WiFi stick](http://www.amazon.de/gp/product/B003MTTJOY)
* [USB microphone](http://www.amazon.de/gp/product/B00N1YMO9W)
* [MicroSD card (16GB)](http://www.amazon.de/gp/product/B007XZL7PC)

## Importing audio

You may want to import audio you recored with third party deviced like an iPhone. To do so, just put your files in the `/usr/sleeptalk/records-import` folder and make sure, you file name contains something like a number to make sure the first file (if you have multiple chunks) is processed first. The importer script (`import-audio.sh`) will also add a seed at the end of the file name to make definitely sure you won't overwrite any existing file.

The importer will try to convert any audio file format to `wav`. If it fails, your file will be just deleted. After the import, the file is treated like a file that was recorded by the Raspberry Pi itself. Read the "Workflow" section to get an idea what is done with your file.

## Videos

Videos are rendered with `15` FPS. So one second is equivalent to 15 frames.

## Samba

The configuration for the samba server is stored here: `/etc/samba/smb.conf`. Type `sudo nano /etc/samba/smb.conf` to edit the file.
By default all folders documented in the "File system" area are a separate share. You may not touch them, but they are there for debug reasons.

To restart the samba server, type: `sudo /etc/init.d/samba restart`

## Thanks to

* Michael Malura ([https://github.com/maluramichael](https://github.com/maluramichael)) for the node.js support

## License

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/).

![](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_cc.png)
![](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_by.png)
![](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_nc.png)
![](http://creativecommons.org/wp-content/themes/creativecommons.org/images/chooser_sa.png)

## References

### Bootstrap

* [http://v4-alpha.getbootstrap.com/](http://v4-alpha.getbootstrap.com/)

### Colourlovers

* [http://www.colourlovers.com/palette/580974/Adrift_in_Dreams](http://www.colourlovers.com/palette/580974/Adrift_in_Dreams)
* From light to dark:
  * #CFF09E
  * #A8DBA8
  * #79BD9A
  * #3B8686
  * #0B486B

### node.js

* [https://github.com/isaacs/node-glob](https://github.com/isaacs/node-glob)
* [https://github.com/remy/nodemon](https://github.com/remy/nodemon)

### Wavesurfer

* [http://wavesurfer-js.org/](http://wavesurfer-js.org/)