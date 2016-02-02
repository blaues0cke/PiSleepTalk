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
	, multer     = require('multer')
    , upload     = multer({ dest: config.audio_file_path_import + '/' })
;

module.exports = function(app) {
	app.post('/import', upload.single('file'), function (req, res) {
		
		var newFilepath = config.audio_file_path_import + '/' + req.file.originalname;

		// Thanks to
		// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
		fs.rename(req.file.path, newFilepath);

		res.redirect('/import');
	});
}