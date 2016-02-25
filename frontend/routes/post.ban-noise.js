// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config    = require('../core/config.js')
	, framework = require('../core/framework.js')
	, fs        = require('fs')
;

module.exports = function(app) {
	app.post('/ban-noise/:name.' + config.default_audio_format, function(req, res) {
		var filepath = framework.checkFile(req, res, config.default_audio_format, config.audio_file_path_to_render);

		if (filepath) {
			// Thanks to
			// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
			var newAudioPath = config.audio_file_path_noise + '/start-' + req.body.start + '-stop-' + req.body.end + '-' + req.params.name + '.' + config.default_audio_format;
			fs.rename(filepath, newAudioPath);

			res.status(200).send('OK');
		}
	});
}