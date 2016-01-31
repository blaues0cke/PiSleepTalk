// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var fs = require('fs');

var alphanumeric = function (input) {  
	// Thanks to
	// * http://www.w3resource.com/javascript/form/letters-numbers-field.php
	var letterNumber = /^[0-9a-zA-Z_\-\.]+$/;

	return input.match(letterNumber);
};

this.alphanumeric = alphanumeric;

this.checkFile = function (req, res, ending, path) {
	if (req.params.name && alphanumeric(req.params.name)) {
		// Thanks to
		// * http://stackoverflow.com/questions/8181879/nodejs-setting-up-wildcard-routes-or-url-rewrite
		var filepath = path + '/' + req.params.name + ending;

		if (fs.existsSync(filepath)) {
			return filepath;
		}
		else {
			// Thanks to
			// * http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
			res.status(404).send('Sorry, file not found. "' + filepath + '" does not exist on server.');
		}
	}
	else {
		res.status(500).send('Malformed filename. Stop tryin to hack this server.');
	}
		
	return false;
};