var   express = require('express')
	, fs      = require('fs')
	, glob    = require("glob")
	, path    = require('path')
;

var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));




app.get('/', function (req, res) {

	var fileToProcess = null;

	// Thanks to
	// * http://stackoverflow.com/questions/11282880/nodejs-module-to-find-files
	// * https://github.com/isaacs/node-glob
	glob("/usr/sleeptalk/records_to_render/*.wav", function (er, files) {
		
		if (files && files.length > 0)
		{
			for (var key in files)
			{
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

	})



	res.render('index');


});

/*

*/


app.listen(9888);