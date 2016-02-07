# PiSlepTalk

The idea behind this project was to provide a "should work out of the box" solution to make a Raspberry Pi record what you are talking while sleeping.
Beware, this project is **work in progress**, see [our issue tracker](https://github.com/blaues0cke/PiSleepTalk/issues) to see whats going on. You can find some screeshot at the end of this file.

## Feature list

* Automatically record audio while you sleep
* Rating of audio and automated deletion of non-sleeptalk-recordings
* Web interface to add subtitles to recordings and download the videos
* Automatic video generation
* Possibility to import audio recorded from third party devices
* Multiple recording triggers like a hardware switch, the time, last.fm or Philips Hue
* Automated YouTube upload

## Installation

TODO (See [#24](https://github.com/blaues0cke/PiSleepTalk/issues/24))

## File system

* `/usr/sleeptalk/cache` Some generated data is stored in here, clear it if you want, the content will be re-generated
* `/usr/sleeptalk/debug` A folder that contains debug output, not required for production mode
* `/usr/sleeptalk/frontend` Contains the whole node.js frontend
* `/usr/sleeptalk/scripts` Contains all bash scripts
* `/usr/sleeptalk/records-amplitude` Contains files that have a pending amplitude check
* `/usr/sleeptalk/records-decrease-volume` Contains files that are too loud
* `/usr/sleeptalk/records-import` Contains files you want to import in the system
* `/usr/sleeptalk/records-increase-volume` Contains files that are too quiet
* `/usr/sleeptalk/records-final` Contains video scenes generated from your texts
* `/usr/sleeptalk/records-raw` Contains the raw recordings
* `/usr/sleeptalk/records-rendered` Contains fully rendered movies (multiple scenes)
* `/usr/sleeptalk/records-timestamp` Contains files that have a pending timestamp addition
* `/usr/sleeptalk/records-to-render` Contains files that have to be rendered to scenes
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

## Hardware switch and led

PiSleeptalk also supports a hardware switch to enable and disable the recording feature. Make sure you enabled this feature by chaning the `button_enabled` setting in `config.cfg`. Wire the buttons cables to the following wiring (Between pin 6 and pin 11):

				|▔▔▔▔||▔▔▔▔|
				| 01 || 02 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 03 || 04 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 05 || 06 | <= Switch -
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 07 || 08 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 09 || 10 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
	Switch + => | 11 || 12 | <= Force switch +
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
	   led + =>	| 13 || 14 | <= Led -
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 15 || 16 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 17 || 18 |
				|▁▁▁▁||▁▁▁▁|
				|▔▔▔▔||▔▔▔▔|
				| 19 || 20 | <= Force switch -
				|▁▁▁▁||▁▁▁▁|


So at the end, your switch should sit between pin `6` and pin `11`. To enable the led, just place it between pin `13` and `14`. Don't forget to enable the `led_enabled` settings.

## Importing audio

You may want to import audio you recored with third party deviced like an iPhone. To do so, just put your files in the `/usr/sleeptalk/records-import` folder and make sure, you file name contains something like a number to make sure the first file (if you have multiple chunks) is processed first. The importer script (`import-audio.sh`) will also add a seed at the end of the file name to make definitely sure you won't overwrite any existing file.

The importer will try to convert any audio file format to `wav`. If it fails, your file will be just deleted. After the import, the file is treated like a file that was recorded by the Raspberry Pi itself. Read the "Workflow" section to get an idea what is done with your file.

Beware: The system will wait a configured amount of time (default: {{500 seconds}}) until the import folder is checked after it was changed. You can force the import using the "Force import" button in the frontend.

## Videos

Videos are rendered with `15` FPS. So one second is equivalent to 15 frames.

## Samba

The configuration for the samba server is stored here: `/etc/samba/smb.conf`. Type `sudo nano /etc/samba/smb.conf` to edit the file.
By default all folders documented in the "File system" area are a separate share. You may not touch them, but they are there for debug reasons.

To restart the samba server, type: `sudo /etc/init.d/samba restart`

## Thanks to

* Jonas Otto ([https://github.com/ottojo](https://github.com/ottojo)) for the hardware support
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

### node.js

* [https://github.com/isaacs/node-glob](https://github.com/isaacs/node-glob)
* [https://github.com/remy/nodemon](https://github.com/remy/nodemon)

### Wavesurfer

* [http://wavesurfer-js.org/](http://wavesurfer-js.org/)

### Screenshots

* The main interface, here you can subtitle your recordings.
    ![screen shot 2016-02-07 at 17 33 12](https://cloud.githubusercontent.com/assets/5159398/12873577/32677f48-cdc1-11e5-9085-91e160d72701.png)
* I added some texts in this screenshot.
    ![screen shot 2016-02-07 at 17 33 42](https://cloud.githubusercontent.com/assets/5159398/12873576/32659296-cdc1-11e5-874f-2009faecaa25.png)
* PiSleepTalk also supports common keyboard shortcuts.
    ![screen shot 2016-02-07 at 17 34 01](https://cloud.githubusercontent.com/assets/5159398/12873573/32523638-cdc1-11e5-86e5-317f04fb732f.png)
* You can see all the videos that was generated for you in a nice overview.
    ![screen shot 2016-02-07 at 17 34 09](https://cloud.githubusercontent.com/assets/5159398/12873575/3255f11a-cdc1-11e5-8ab2-f7b27504159b.png)
* Even with a live-preview feature
    ![screen shot 2016-02-07 at 17 34 12](https://cloud.githubusercontent.com/assets/5159398/12873571/3250fe94-cdc1-11e5-8241-89b6f0b58bab.png)
* You can import files recorded by any third party device
    ![screen shot 2016-02-07 at 17 34 55](https://cloud.githubusercontent.com/assets/5159398/12873574/32548e9c-cdc1-11e5-94f8-537474f29b5e.png)
* You can concatinate all recordings to a full movie
    ![screen shot 2016-02-07 at 17 34 32](https://cloud.githubusercontent.com/assets/5159398/12873572/3251219e-cdc1-11e5-9981-f1ef058130de.png)
* Also there is a status page to get an idea of whats going on behind the scenes.
    ![screen shot 2016-02-07 at 17 34 44](https://cloud.githubusercontent.com/assets/5159398/12873570/325000fc-cdc1-11e5-83af-86aa93ce0a7a.png)