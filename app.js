var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var https = require('https');

var indexRouter = require('./routes/index');

require('dotenv').config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

const port = process.env.PORT || 80;

// app.listen(port, function() {
// 	console.log(`Express app running on port ${port}`);
// });

// key: process.env.SERVER_KEY,
// 			cert: process.env.SERVER_CERT

const httpsServer = https.createServer(
	{
		key: process.env.SERVER_KEY.replace(/\\n/gm, '\n'),
		cert: process.env.SERVER_CERT.replace(/\\n/gm, '\n')
	},
	app
);

httpsServer.listen(port, function() {
	console.log(`WAFFL Archive listening on port ${port}!`);
});

// https
// 	.createServer(
// 		{
// 			key: process.env.SERVER_KEY.replace(/\\n/gm, '\n'),
// 			cert: process.env.SERVER_CERT.replace(/\\n/gm, '\n')
// 		},
// 		app
// 	)
// 	.listen(port, function() {
// 		console.log(`WAFFL Archive listening on port ${port}!`);
// 	});

module.exports = app;
