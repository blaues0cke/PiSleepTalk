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
	, multer = require('multer')
    , upload = multer({ dest: config.audio_file_path_import + '/' })
;

module.exports = function(app) {
	app.post('/import', upload.single('file'), function (req, res) {
		if (req.file && req.file.originalname && req.file.originalname.length > 0) {

			var instantApprove = req.body && req.body.instantApprove && req.body.instantApprove == "true" || false;
			var folderPath     = instantApprove ? config.audio_file_path_import_instant : config.audio_file_path_import;
			var filename       = req.file.originalname.toLowerCase();
				filename       = filename.replace('ä', 'ae');
				filename       = filename.replace('ö', 'oe');
				filename       = filename.replace('ü', 'ue');
				// Thanks to
				// * http://stackoverflow.com/questions/20864893/javascript-replace-all-non-alpha-numeric-characters-new-lines-and-multiple-whi
				filename       = filename.replace(/[^A-Za-z0-9_.]/g, '_');
			var newFilepath    = folderPath + '/' + filename;

			console.log('Import path: ', newFilepath);

			try {
				// Thanks to
				// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
				fs.rename(req.file.path, newFilepath);

				res.redirect('/import');
			}
			catch(err) {
			    res.redirect('/import?error=2');
			}
		}
		else
		{
			res.redirect('/import?error=1');
		}
	});
}