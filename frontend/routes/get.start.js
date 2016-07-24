// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config  = require('../core/config.js')
    , fs      = require('fs')
	, glob    = require('glob')
	, path    = require('path')
;

module.exports = function(app) {
	app.get('/', function (req, res) {

		var fileToProcess     = null;
		var fileToProcessFull = null;
		var imagePath 		  = null;

		// Thanks to
		// * http://stackoverflow.com/questions/11282880/nodejs-module-to-find-files
		// * https://github.com/isaacs/node-glob
		var files = glob.sync(config.audio_file_path_to_render + '/*.' + config.default_audio_format);
			
		if (files && files.length > 0) {
			for (var key in files) {
				var filepath = files[key];

				// Thanks to
				// * http://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
				var filename     = path.basename(filepath, path.extname(filepath));
				var textFilePath = config.audio_file_path_to_render + '/' + filename + '.' + config.default_sleeptalk_format;
				var imagePath    = filename + '.' + config.default_image_format;

				// Thanks to
				// * http://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
				if (!fs.existsSync(textFilePath)) {
					fileToProcess     = filename;
					fileToProcessFull = filepath;

					console.log('Found file to process:', filename);
				}

				if (fileToProcess) {
					break;
				}

			}
		}

		console.log('File to process is: ', fileToProcess);

		if (fileToProcess !== null)
		{
			var stats 		    = fs.statSync(fileToProcessFull);
			var fileSizeInBytes = stats['size'];

			// Thanks to
			// * http://stackoverflow.com/questions/30737069/pass-variables-to-jade-template
			// * http://stackoverflow.com/questions/9931531/jade-template-with-variables-nodejs-server-side
			res.render('edit', {
				pageData: {
					audioFormat:   config.default_audio_format,
					context: 	   'home',
					fileSize:      (fileSizeInBytes / 1014).toFixed(2),
					fileToProcess: fileToProcess,
					fileCount:     files.length,
					imagePath:     imagePath
				}
			});
		}
		else
		{
			res.render('nothing-to-do');
		}
	});
}