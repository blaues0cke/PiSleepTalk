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
;

module.exports = function(app) {
	app.post('/concat-videos', function (req, res) {
		
		console.log('Videos', req.body.videos);

		var randomFolderName = (Math.random() * 1e32).toString(36);
		var finalFolderPath = config.audio_file_path_rendered + '/' + randomFolderName;

		fs.mkdirSync(finalFolderPath);

		var content 		= req.body.movieTitle + "\n\n";
		var contentFilePath = finalFolderPath + '/movie.' + config.default_sleeptalk_movie_format;

		fs.writeFileSync(contentFilePath, content); 

		for (var key in req.body.videos)
		{
			var currentVideoName = req.body.videos[key];
			var currentVideoPath = config.audio_file_path_final + '/' + currentVideoName;

			if (fs.existsSync(currentVideoPath)) {
				var newFilepath = finalFolderPath + '/' + currentVideoName;

				// Thanks to
				// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
				fs.rename(currentVideoPath, newFilepath);
    		}
		}

		res.status(200).send('OK');
	});
}