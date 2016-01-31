// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config    = require('../core/config.js')
    , defines   = require('../core/defines.js')
	, framework = require('../core/framework.js')
;

module.exports = function(app) {
	app.get('/:name' + defines.movieFileExtension, function(req, res) {
		var filepath = framework.checkFile(req, res, defines.movieFileExtension, config.audio_file_path_final);

		if (filepath) {
			// Thanks to
			// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
			res.sendFile(filepath);
		}
	});
}