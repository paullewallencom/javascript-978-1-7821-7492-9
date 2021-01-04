var express = require("express");
var path    = require("path");
var http   = require("http");

module.exports = function () {
    var base = path.resolve("app");
    var app = express().use(express.static(base));
    return http.createServer(app).listen(8000);
};