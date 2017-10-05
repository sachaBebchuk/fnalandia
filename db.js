
// setting up ORM
var Sequelize = require('sequelize')
var env       = process.env.NODE_ENV || "development";
var config    = require("./config/config.json")[env]

var DBConnectionString = config.DBMSName + '://' + config.DBUser + ':' + config.DBPass + '@' + config.DBAddr + ':' + config.DBPort + '/' + config.DBName

const db = new Sequelize(DBConnectionString,{
  define: {
    freezeTableName: true,
    underscored: true
  },
  logging: false

})

module.exports = db
