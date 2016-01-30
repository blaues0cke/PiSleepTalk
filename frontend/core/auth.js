// 
// This file is part of PiSleepTalk.
// Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   auth   = require('basic-auth')
    , config = require('./config.js')
;

console.log(config);

// Thanks to
// * http://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
module.exports = function(req, res, next) {
	var user = auth(req);
	if (config.web_auth_enabled == 'true' &&
		(!user || !user.name || !user.pass | user.name != config.web_user || user.pass != config.web_password)
	) {
		res.set('WWW-Authenticate', 'Basic realm="example"');
		return res.status(401).send();
	}

	return next();
};