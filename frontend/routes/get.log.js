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
	app.get('/logs', function (req, res) {
		var pageData = {
			context: 'status',
			logData: null
		};

		var contents = fs.readFileSync('/usr/sleeptalk/error.log').toString();

		if (contents && contents.length > 0) {
			pageData.logData = contents;
		}

		res.render('logs', { pageData: pageData });
	});
}