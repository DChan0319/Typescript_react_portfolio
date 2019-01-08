"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var morgan = require("morgan");
var dotenv = require("dotenv");
dotenv.config();
var server = express();
server.use(express.static(path.resolve(__dirname, '../../client/dist')));
server.use(morgan('dev'));
var port = process.env.PORT || 8080;
server.get('*', function (req, res) { return res.sendFile(path.resolve(__dirname, '../../client/dist')); });
server.listen(port, function () {
    console.log("Serving static files on port " + port);
});
