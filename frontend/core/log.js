// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   config      = require('./config.js')
    , fs          = require('fs')
    , logStdout   = process.stdout
    , originalLog = console.log
    , util        = require('util')
;

// Thanks to
// * http://stackoverflow.com/questions/8393636/node-log-in-a-file-instead-of-the-console
console.log = function () {
	var dataToLog = util.format.apply(null, arguments) + '\n';

	// Thanks to
	// * http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node
	fs.appendFile(config.error_log_path, dataToLog, function (err) {
		originalLog(err);
	});

	logStdout.write(util.format.apply(null, arguments) + '\n');
}

console.error = console.log;