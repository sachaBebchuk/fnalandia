
var Sequelize = require('sequelize')
var sequelize = require('../db')

const t1 = sequelize.define('t1', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
})

module.exports = t1