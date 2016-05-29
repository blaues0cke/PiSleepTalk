// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var config = require('../core/config.js')
    fs     = require('fs')
;

module.exports = function(app) {
	app.delete('/', function (req, res) {

		console.log('Clearing unprocessed...');

		// Thanks to
		// * http://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty
		fs.readdirSync(config.audio_file_path_to_render).forEach(function(file, index) {
			var currentPath = config.audio_file_path_to_render + '/' + file;

			if (!fs.lstatSync(currentPath).isDirectory()) {
				fs.unlinkSync(currentPath);
			}
	    });

		// Thanks to
		// * http://stackoverflow.com/questions/13397691/sending-a-succes-state-to-form-nodejs-express
		res.sendStatus(200);
	});
}