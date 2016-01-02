// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

var   bodyParser = require('body-parser')
	, diskusage  = require('diskusage')
    , express    = require('express')
    , framework  = require('./framework.js')
	, fs         = require('fs')
	, glob       = require("glob")
	, path       = require('path')
;

var app = express();

app.set('view engine', 'jade');
// Thanks to
// * http://stackoverflow.com/questions/25550819/error-most-middleware-like-bodyparser-is-no-longer-bundled-with-express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var checkFile = function (req, res) {
	if (req.params.name && framework.alphanumeric(req.params.name)) {
		// Thanks to
		// * http://stackoverflow.com/questions/8181879/nodejs-setting-up-wildcard-routes-or-url-rewrite
		var filepath = '/usr/sleeptalk/records_to_render/' + req.params.name + '.wav';

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

app.get('/:name.wav', function(req, res) {
	var filepath = checkFile(req, res);

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
		res.sendFile(filepath);
	}
});

app.delete('/:name.wav', function(req, res) {
	var filepath = checkFile(req, res);

	if (filepath) {
		fs.unlinkSync(filepath);

		res.status(200).send('OK');
	}
});

app.post('/:name.wav', function(req, res) {
	var filepath = checkFile(req, res);

	if (filepath) {
		var content 		= req.body.content;
		var contentFilePath = '/usr/sleeptalk/records_to_render/' + req.params.name + '.sleeptalk';

		fs.writeFileSync(contentFilePath, content); 

		res.status(200).send('OK');
	}
});

app.get('/', function (req, res) {

	var fileToProcess = null;

	// Thanks to
	// * http://stackoverflow.com/questions/11282880/nodejs-module-to-find-files
	// * https://github.com/isaacs/node-glob
	var files = glob.sync("/usr/sleeptalk/records_to_render/*.wav");
		
	if (files && files.length > 0) {
		for (var key in files) {
			var filepath = files[key];

			// Thanks to
			// * http://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
			var filename = path.basename(filepath, path.extname(filepath));
			var textFilePath = '/usr/sleeptalk/records_to_render/' + filename + '.sleeptalk';

			// Thanks to
			// * http://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
			if (!fs.existsSync(textFilePath)) {
				fileToProcess = filename;

				console.log('Found file to process:', filename);
			}

			if (fileToProcess) {
				break;
			}

		}
	}

	console.log('File to process is: ', fileToProcess);

	if (fileToProcess !== null)
	{
		// Thanks to
		// * http://stackoverflow.com/questions/30737069/pass-variables-to-jade-template
		// * http://stackoverflow.com/questions/9931531/jade-template-with-variables-nodejs-server-side
		res.render('edit', { pageData: { fileToProcess: fileToProcess } });
	}
	else
	{
		res.render('nothing-to-do');
	}
});

app.get('/status', function (req, res) {
	var pageData = {
		generationDate: new Date()
	};

	diskusage.check('/', function(err, info) {
	
		pageData.diskUsage = {
			available: (info.available / 1014 / 1024 / 1024).toFixed(2),
			free: 	   (info.free      / 1014 / 1024 / 1024).toFixed(2),
			total: 	   (info.total     / 1014 / 1024 / 1024).toFixed(2)
		};

		pageData.files = [];

		var files = glob.sync("/usr/sleeptalk/records_*/*");
			
		if (files && files.length > 0) {
			for (var key in files) {
				pageData.files.push(files[key]);
			}
		}

		console.log(pageData);

		res.render('status', { pageData: pageData });
	});	
});


 




app.listen(9888);