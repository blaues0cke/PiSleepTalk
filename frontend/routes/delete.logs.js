// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var fs = require('fs');

module.exports = function(app) {
	app.delete('/logs', function (req, res) {

		console.log('Clearing logs...');

		// Thanks to
		// * http://stackoverflow.com/questions/17371224/node-js-delete-content-in-file
		fs.truncateSync('/usr/sleeptalk/error.log', 0);

		// Thanks to
		// * http://stackoverflow.com/questions/13397691/sending-a-succes-state-to-form-nodejs-express
		res.sendStatus(200);
	});
}