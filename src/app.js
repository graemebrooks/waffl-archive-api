"use strict";
exports.__esModule = true;
var http_errors_1 = require("http-errors");
var express_1 = require("express");
var path = require("path");
var cookie_parser_1 = require("cookie-parser");
var morgan_1 = require("morgan");
var index_1 = require("./routes/index");
// Environmental variables configuration
require('dotenv').config();
var app = express_1["default"]();
// Middleware
app.use(morgan_1["default"]('dev'));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static(path.join(__dirname, 'public')));
app.use('/', index_1["default"]);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1["default"](404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.render('error');
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("WAFFL ARCHIVE running on port " + port);
});
module.exports = app;
