// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   fs   = require('fs')
    , glob = require('glob')
    , path = require('path')
;

module.exports = function(app) {
	app.get('/videos', function (req, res) {
		var pageData = {
			context: 'videos'
		};

		pageData.videos = [];

		var files = glob.sync('/usr/sleeptalk/records-final/*');
			
		if (files && files.length > 0) {
			for (var key in files) {

				var path 		    = files[key];
				var pathExploded    = path.replace('/usr/sleeptalk/records-final/', '').split('-');
				var stats 		    = fs.statSync(files[key])
				var fileSizeInBytes = stats['size']

				var fileInfo = {
					path:   path.replace('/usr/sleeptalk/records-final/', ''),
					size:   (fileSizeInBytes / 1014).toFixed(2),
					length: pathExploded[0]
				}

				pageData.videos.push(fileInfo);
			}
		}

		console.log(pageData);

		res.render('videos', { pageData: pageData });

	});
}