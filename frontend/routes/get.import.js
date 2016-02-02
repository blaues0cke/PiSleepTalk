// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config = require('../core/config.js')
	, glob   = require('glob')
;

module.exports = function(app) {
	app.get('/import', function (req, res) {
		var pageData = {
			context: 'import',
			import_timeout: config.import_dealay_seconds
		};

		pageData.files = [];

		var files = glob.sync(config.audio_file_path_import + '/*');
			
		if (files && files.length > 0) {
			for (var key in files) {

				var stats 		    = fs.statSync(files[key])
				var fileSizeInBytes = stats['size']

				var fileInfo = {
					path: files[key],
					size: (fileSizeInBytes / 1014).toFixed(2)
				}

				pageData.files.push(fileInfo);
			}
		}

		console.log('page data', pageData);

		res.render('import', { pageData: pageData });
	});
}