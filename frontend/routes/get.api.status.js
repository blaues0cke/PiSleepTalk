// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config = require('../core/config.js')
    , fs     = require('fs')
;

module.exports = function(app) {
	app.get('/api/is-recording.json', function (req, res) {
		
		var is_recording = false;

	    try {
	        fs.accessSync('/usr/sleeptalk/temp/recording', fs.F_OK);
	        
	        is_recording = true;
	    } catch (e) {

	    }

		res.send(JSON.stringify({ isRecording: is_recording }));
	});
}