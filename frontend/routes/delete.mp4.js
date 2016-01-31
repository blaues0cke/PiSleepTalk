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
	app.delete('/:name.' + config.default_video_format, function(req, res) {
		var filepath = framework.checkFile(req, res, config.default_video_format, config.audio_file_path_final);

		if (filepath) {
			fs.unlinkSync(filepath);

			res.status(200).send('OK');
		}
	});
}