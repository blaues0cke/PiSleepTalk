// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config    = require('../core/config.js')
	, diskusage = require('diskusage')
	, framework = require('../core/framework.js')
	, fs        = require('fs')
	, glob      = require('glob')
;

module.exports = function(app) {
	app.get('/status', function (req, res) {
		var pageData = {
			context: 		'status',
			generationDate: new Date()
		};

		diskusage.check('/', function(err, info) {
			
			// Thanks to
			// * http://stackoverflow.com/questions/21008385/is-it-possible-to-round-in-jade
			pageData.diskUsage = {
				available: (info.available / 1014 / 1024 / 1024).toFixed(2),
				free: 	   (info.free      / 1014 / 1024 / 1024).toFixed(2),
				total: 	   (info.total     / 1014 / 1024 / 1024).toFixed(2)
			};

			pageData.files = [];

			var files = glob.sync(config.audio_file_path_glob + '/*');
				
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

			console.log(pageData);

			res.render('status', { pageData: pageData });
		});	
	});
}