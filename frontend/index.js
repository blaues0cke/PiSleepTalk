// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   auth       = require('basic-auth')
	, bodyParser = require('body-parser')
	, defines    = require('./defines.js')
	, diskusage  = require('diskusage')
    , express    = require('express')
    , framework  = require('./framework.js')
	, fs         = require('fs')
	, iniparser  = require('iniparser')
	, glob       = require('glob')
	, path       = require('path')
	, util 		 = require('util');
;

var logStdout		   = process.stdout;
var originalLog		   = console.log;
var config 			   = iniparser.parseSync('/usr/sleeptalk/config/config.cfg');

console.log(config);

// Thanks to
// * http://stackoverflow.com/questions/8393636/node-log-in-a-file-instead-of-the-console
console.log = function () {
	var dataToLog = util.format.apply(null, arguments) + '\n';

	// Thanks to
	// * http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node
	fs.appendFile('/usr/sleeptalk/error.log', dataToLog, function (err) {
		originalLog(err);
	});

	logStdout.write(util.format.apply(null, arguments) + '\n');
}

console.error = console.log;

var app = express();

app.set('view engine', 'jade');
// Thanks to
// * http://stackoverflow.com/questions/25550819/error-most-middleware-like-bodyparser-is-no-longer-bundled-with-express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Thanks to
// * http://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
app.use(function(req, res, next) {
	var user = auth(req);
	if (!user || !user.name || !user.pass | user.name != config.web_user || user.pass != config.web_password) {
		res.set('WWW-Authenticate', 'Basic realm="example"');
		return res.status(401).send();
	}

	return next();
});



// Thanks to
// * Michael Malura (https://github.com/blaues0cke/PiSleepTalk/issues/48)

    fs.readdirSync('./routes').forEach(function(file) {
        require(path.join(__dirname, 'routes', file))(app);
    });










app.post('/increase-volume/:name' + defines.audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, defines.audioFileExtension, 'records-to-render');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
		fs.rename(filepath, '/usr/sleeptalk/records-increase-volume/' + req.params.name + defines.audioFileExtension);

		res.status(200).send('OK');
	}
});



app.get('/status', function (req, res) {
	var pageData = {
		context: 		'status',
		generationDate: new Date()
	};

	diskusage.check('/', function(err, info) {
		
		// Thanks to
		// * http://stackoverflow.com/questions/21008385/is-it-possible-to-round-in-jade
		pageData.diskUsage = {
			available: (info.available / 1014 / 1024 / 1024).toFixed(2),
			free: 	   (info.free      / 1014 / 1024 / 1024).toFixed(2),
			total: 	   (info.total     / 1014 / 1024 / 1024).toFixed(2)
		};

		pageData.files = [];

		var files = glob.sync('/usr/sleeptalk/records-*/*');
			
		if (files && files.length > 0) {
			for (var key in files) {

				var stats 		    = fs.statSync(files[key])
				var fileSizeInBytes = stats['size']

				var fileInfo = {
					path: files[key],
					size: (fileSizeInBytes / 1014).toFixed(2)
				}

				pageData.files.push(fileInfo);
			}
		}

		console.log(pageData);

		res.render('status', { pageData: pageData });
	});	
});

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

app.delete('/logs', function (req, res) {

	console.log('Clearing logs...');

	// Thanks to
	// * http://stackoverflow.com/questions/17371224/node-js-delete-content-in-file
	fs.truncateSync('/usr/sleeptalk/error.log', 0);

	// Thanks to
	// * http://stackoverflow.com/questions/13397691/sending-a-succes-state-to-form-nodejs-express
	res.sendStatus(200);
});

app.get('/videos', function (req, res) {
	var pageData = {
		context: 'videos'
	};

	pageData.videos = [];

	var files = glob.sync('/usr/sleeptalk/records-final/*');
		
	if (files && files.length > 0) {
		for (var key in files) {

			var path 		    = files[key];
			var pathExploded    = path.replace('/usr/sleeptalk/records-final/', '').split('-');
			var stats 		    = fs.statSync(files[key])
			var fileSizeInBytes = stats['size']

			var fileInfo = {
				path:   path.replace('/usr/sleeptalk/records-final/', ''),
				size:   (fileSizeInBytes / 1014).toFixed(2),
				length: pathExploded[0]
			}

			pageData.videos.push(fileInfo);
		}
	}

	console.log(pageData);

	res.render('videos', { pageData: pageData });

});


 




app.listen(9888);