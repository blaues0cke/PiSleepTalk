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

				var path = files[key];
				
				try {
					var stats 		    = fs.statSync(path);
					var fileSizeInBytes = stats['size'];

					var fileInfo = {
						audioPath:   path.replace(config.audio_file_path_to_render + '/', ''),
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


		console.log('page data', pageData);

		res.render('overview', { pageData: pageData });
	});
}