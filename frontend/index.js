var Express = require('express'),
	fs = require('fs');

var app = Express();

app.set('view engine', 'jade');
app.use(Express.static('public'));

app.get('/', function (req, res) {
	res.render('index');
});


app.get('/', function (req, res) {
	res.render('index');
});

app.listen(9888);