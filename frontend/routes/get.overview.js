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
    , glob   = require('glob')
    , path   = require('path')
;

module.exports = function(app) {
	app.get('/overview', function (req, res) {
		var pageData = {
			context: 'overview',
			limit: config.overview_file_limit
		};

		pageData.filters = [];

		var files = glob.sync(config.audio_file_path_to_render + '/*.' + config.default_audio_format);
			
		if (files && files.length > 0) {
			for (var key in files) {

				var filepath = files[key];

				// Thanks to
				// * http://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
				var filename     = path.basename(filepath, path.extname(filepath));
				var textFilePath = config.audio_file_path_to_render + '/' + filename + '.' + config.default_sleeptalk_format;

				// Thanks to
				// * http://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
				if (!fs.existsSync(textFilePath)) {
					try {
						var stats 		    = fs.statSync(filepath);
						var fileSizeInBytes = stats['size'];
						var audioPath       = filepath.replace(config.audio_file_path_to_render + '/', '');
						var imagePath       = audioPath.replace(config.default_audio_format, config.default_image_format);

						var fileInfo = {
							audioPath:   audioPath,
							imagePath:   imagePath,
							size:        (fileSizeInBytes / 1014).toFixed(2)
						}
					
						pageData.filters.push(fileInfo);

						if (pageData.filters.length > config.overview_file_limit)
						{
							break;
						}
					}
					catch (e) {
						console.error('error', e);
					}
				}
			}
		}

		console.log('page data', pageData);

		res.render('overview', { pageData: pageData });
	});
}