import createError from 'http-errors';
import express, { Request, Response, NextFunction, Errback } from 'express';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as fs from 'fs';
import * as https from 'https';

import indexRouter from './routes/index';

// Environmental variables configuration
require('dotenv').config();

let app = express();

// Middleware
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
app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.render('error');
});

const port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`WAFFL ARCHIVE running on port ${port}`);
});

module.exports = app;
