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
	app.get('/videos', function (req, res) {
		var pageData = {
			context:   'videos',
			titleTime: config.title_time_in_seconds
		};

		pageData.videos = [];

		var files = glob.sync(config.audio_file_path_rendered + '/*.mp4');
			
		if (files && files.length > 0) {
			for (var key in files) {

				var path 		    = files[key];
				var pathExploded    = path.replace(config.audio_file_path_rendered + '/', '').split('_');
				var stats 		    = fs.statSync(files[key])
				var fileSizeInBytes = stats['size']
				var sizeExploded    = pathExploded[1].split('.');

				console.log('Path exploden', pathExploded);

				var fileInfo = {
					path:   path.replace(config.audio_file_path_rendered + '/', ''),
					size:   (fileSizeInBytes / 1014).toFixed(2),
					type:   'full',
					length: sizeExploded[0]
				}

				pageData.videos.push(fileInfo);
			}
		}

		var files = glob.sync(config.audio_file_path_final + '/*');
			
		if (files && files.length > 0) {
			for (var key in files) {

				var path 		    = files[key];
				var pathExploded    = path.replace(config.audio_file_path_final + '/', '').split('-');
				var stats 		    = fs.statSync(files[key])
				var fileSizeInBytes = stats['size']

				var fileInfo = {
					path:   path.replace(config.audio_file_path_final + '/', ''),
					size:   (fileSizeInBytes / 1014).toFixed(2),
					type:   'part',
					length: pathExploded[0]
				}

				pageData.videos.push(fileInfo);
			}
		}

		console.log('page data', pageData);

		res.render('videos', { pageData: pageData });
	});
}