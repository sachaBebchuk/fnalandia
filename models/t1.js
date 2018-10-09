
var Sequelize = require('sequelize')
var sequelize = require('../db')

module.exports = function (){
	return sequelize.define(
		't1',
		{
			id: {
				type: Sequelize.INTEGER, primaryKey: true
			},
			name: {
				type: Sequelize.STRING
			}
		}
	)
}