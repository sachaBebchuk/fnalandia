
// dependencies
var env                 = process.env.NODE_ENV || "development"
var express             = require('express')
var path                = require('path')
var compression         = require('compression')
var favicon             = require('serve-favicon')
var bodyParser          = require('body-parser');
//var cookieParser      = require('cookie-parser')
var helmet              = require('helmet')
var expressValidator    = require('express-validator')
var session             = require('express-session')
var sequelize           = require('./db')
var addRoutes           = require("./addRoutes")
var config              = require("./config/config.json")[env]

var app = express()

// middleware setup
app.use(helmet())
app.use(compression())
app.set('trust proxy', 1)
app.use(session({
	name: "laSesion",
	secret: config.secret,
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 365 * 24 * 60 * 60 * 1000,
		httpOnly: false 
		/*,secure: true*/
	}
}))
//app.use(cookieParser(config.secret,{}))
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())

// add routes middleware
addRoutes(app)

// static content setup
app.use('/static', express.static(path.join(__dirname,'public')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

module.exports = app
