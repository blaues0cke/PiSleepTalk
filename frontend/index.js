var   express   = require('express')
    , framework = require('./framework.js')
	, fs        = require('fs')
	, glob      = require("glob")
	, path      = require('path')
;

var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));


app.get('/:name.wav', function(req, res) {
	if (req.params.name && framework.alphanumeric(req.params.name))
	{
		// Thanks to
		// * http://stackoverflow.com/questions/8181879/nodejs-setting-up-wildcard-routes-or-url-rewrite
		var filepath = '/usr/sleeptalk/records_to_render/' + req.params.name + '.wav';

		if (fs.existsSync(filepath)) {
			// Thanks to
			// * http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
			res.sendFile(filepath);
		}
		else
		{
			// Thanks to
			// * http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
			res.status(404).send('Sorry, file not found. "' + filepath + '" does not exist on server.');
		}
	}
	else
	{
		res.status(500).send('Malformed filename. Stop tryin to hack this server.');
	}
});

app.get('/', function (req, res) {

	var fileToProcess = null;

	// Thanks to
	// * http://stackoverflow.com/questions/11282880/nodejs-module-to-find-files
	// * https://github.com/isaacs/node-glob
	glob("/usr/sleeptalk/records_to_render/*.wav", function (er, files) {
		
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
				}

				if (fileToProcess) {
					break;
				}

			}
		}
	});







	res.render('index');


});

/*

*/


app.listen(9888);