
// Configurations
let env       = process.env.NODE_ENV || "development"
let config    = require("./config/config.json")[env]

// Dependencies
let path      = require('path')
let fs        = require('fs')
let http      = require('http')
let https     = require('https')
let app       = require('./app')

// creating server
const addr = '127.0.0.1'

/*
let privateKey  = fs.readFileSync(path.join(__dirname, 'cert', config.key), 'utf8');
let certificate = fs.readFileSync(path.join(__dirname, 'cert', config.cert), 'utf8');

let credentials = { key: privateKey,
					cert: certificate
};

let httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.htttps_port,addr,function(){

	console.log('HTTPS server listening to:\t' + addr + ":" + config.https_port)
})
*/


let httpServer = http.createServer(app);

httpServer.listen(config.http_port,addr,function(){

	console.log('HTTP server listening to:\t' + addr + ":" + config.http_port)
})
console.log('You want a piece of me boy?!')
