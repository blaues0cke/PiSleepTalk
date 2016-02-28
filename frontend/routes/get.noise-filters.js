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
	app.get('/noise-filters', function (req, res) {
		var pageData = {
			context: 'status'
		};

		pageData.filters = [];

		var files = glob.sync(config.audio_file_path_noise + '/*.' + config.default_audio_format);
			
		if (files && files.length > 0) {
			for (var key in files) {

				var path 		    = files[key];
				var profilePath     = files[key] + '.' + config.default_noise_format;
				
				try {
					console.log('Checking access for ', profilePath);

					if (fs.existsSync(profilePath))
					{
						console.log('... profile file found');

						var stats 		    = fs.statSync(profilePath);
						var fileSizeInBytes = stats['size'];

						var fileInfo = {
							audioPath:   path.replace(config.audio_file_path_noise + '/', ''),
							profilePath: profilePath.replace(config.audio_file_path_noise + '/', ''),
							size:        (fileSizeInBytes / 1014).toFixed(2)
						}
					
						pageData.filters.push(fileInfo);
					}
					else
					{
						console.log('... no profile file found');
					}
				}
				catch (e) {
					console.error('error', e);
				}
			}
		}


		console.log('page data', pageData);

		res.render('noise-filters', { pageData: pageData });
	});
}