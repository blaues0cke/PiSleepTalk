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
;

module.exports = function(app) {
	app.get('/download/:name.' + config.default_video_format, function(req, res) {
		var filepath = framework.checkFile(req, res, config.default_video_format, config.audio_file_path_final);

		if (filepath) {
			// Thanks to
			// * http://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
			res.setHeader('Content-disposition', 'attachment; filename=' + req.params.name + '.' + config.default_video_format);
			res.setHeader('Content-type',        'video/' + config.default_video_format);

			// Thanks to
			// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
			res.sendFile(filepath);
		}
	});
}