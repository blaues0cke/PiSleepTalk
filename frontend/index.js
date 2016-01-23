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

var audioFileExtension = '.wav';
var movieFileExtension = '.mp4';

var app = express();

app.set('view engine', 'jade');
// Thanks to
// * http://stackoverflow.com/questions/25550819/error-most-middleware-like-bodyparser-is-no-longer-bundled-with-express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var checkFile = function (req, res, ending, path) {
	if (req.params.name && framework.alphanumeric(req.params.name)) {
		// Thanks to
		// * http://stackoverflow.com/questions/8181879/nodejs-setting-up-wildcard-routes-or-url-rewrite
		var filepath = '/usr/sleeptalk/' + path + '/' + req.params.name + ending;

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

app.get('/:name' + audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, audioFileExtension, 'records-to-render');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
		res.sendFile(filepath);
	}
});

app.get('/:name' + movieFileExtension, function(req, res) {
	var filepath = checkFile(req, res, movieFileExtension, 'records-final');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
		res.sendFile(filepath);
	}
});

app.get('/download/:name' + movieFileExtension, function(req, res) {
	var filepath = checkFile(req, res, movieFileExtension, 'records-final');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
		res.setHeader('Content-disposition', 'attachment; filename=' + req.params.name + movieFileExtension);
		res.setHeader('Content-type', 'video/' + movieFileExtension.replace('.', ''));

		// Thanks to
		// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
		res.sendFile(filepath);
	}
});

app.delete('/:name' + movieFileExtension, function(req, res) {
	var filepath = checkFile(req, res, movieFileExtension, 'records-final');

	if (filepath) {
		fs.unlinkSync(filepath);

		res.status(200).send('OK');
	}
});

app.delete('/:name' + audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, audioFileExtension, 'records-to-render');

	if (filepath) {
		fs.unlinkSync(filepath);

		res.status(200).send('OK');
	}
});

app.post('/:name' + audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, audioFileExtension, 'records-to-render');

	if (filepath) {
		var content 		= req.body.content + "\n\n";
		var contentFilePath = '/usr/sleeptalk/records-to-render/' + req.params.name + '.sleeptalk';

		fs.writeFileSync(contentFilePath, content); 

		res.status(200).send('OK');
	}
});

app.post('/decrease-volume/:name' + audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, audioFileExtension, 'records-to-render');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
		fs.rename(filepath, '/usr/sleeptalk/records-decrease-volume/' + req.params.name + audioFileExtension);

		res.status(200).send('OK');
	}
});

app.post('/increase-volume/:name' + audioFileExtension, function(req, res) {
	var filepath = checkFile(req, res, audioFileExtension, 'records-to-render');

	if (filepath) {
		// Thanks to
		// * http://stackoverflow.com/questions/8579055/how-i-move-files-on-node-js
		fs.rename(filepath, '/usr/sleeptalk/records-increase-volume/' + req.params.name + audioFileExtension);

		res.status(200).send('OK');
	}
});

app.get('/', function (req, res) {

	var fileToProcess = null;

	// Thanks to
	// * http://stackoverflow.com/questions/11282880/nodejs-module-to-find-files
	// * https://github.com/isaacs/node-glob
	var files = glob.sync('/usr/sleeptalk/records-to-render/*' + audioFileExtension);
		
	if (files && files.length > 0) {
		for (var key in files) {
			var filepath = files[key];

			// Thanks to
			// * http://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
			var filename = path.basename(filepath, path.extname(filepath));
			var textFilePath = '/usr/sleeptalk/records-to-render/' + filename + '.sleeptalk';

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
		res.render('edit', { pageData: { context: 'home', fileToProcess: fileToProcess, fileCount: files.length } });
	}
	else
	{
		res.render('nothing-to-do');
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