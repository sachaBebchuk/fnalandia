
// dependencies
var path = require('path')
var fs = require('fs')
var http = require('http')
var https = require('https')
var app = require('./app')
var env       = process.env.NODE_ENV || "development"
var config    = require("./config/config.json")[env]

// creating server
const addr = '127.0.0.1'

/*
var privateKey  = fs.readFileSync(path.join(__dirname, 'cert', config.key), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, 'cert', config.cert), 'utf8');

var credentials = { key: privateKey,
					cert: certificate
};

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.htttps_port,addr,function(){
	
	console.log('HTTPS server listening to:\t' + addr + ":" + config.https_port)
})
*/


var httpServer = http.createServer(app);

httpServer.listen(config.http_port,addr,function(){

	console.log('HTTP server listening to:\t' + addr + ":" + config.http_port)
})
console.log('You want a piece of me boy?!')
