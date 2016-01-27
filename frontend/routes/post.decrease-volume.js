// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   defines   = require('../core/defines.js')
	, framework = require('../core/framework.js')
	, fs        = require('fs')
;

module.exports = function(app) {
	app.post('/decrease-volume/:name' + defines.audioFileExtension, function(req, res) {
		var filepath = framework.checkFile(req, res, defines.audioFileExtension, 'records-to-render');

		if (filepath) {
			// Thanks to
			// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
			fs.rename(filepath, '/usr/sleeptalk/records-decrease-volume/' + req.params.name + defines.audioFileExtension);

			res.status(200).send('OK');
		}
	});
}