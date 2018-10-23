
var Sequelize = require('sequelize')
var sequelize = require('../db')

module.exports = function (){
	return sequelize.define(
		'Usuarios',
		{
			id:{
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nombre:{
				type: Sequelize.STRING(45)
			},
			email:{
				type: Sequelize.STRING
			},
			pass_hash:{
				type: Sequelize.STRING(128)
			},
			salt:{
				type: Sequelize.BLOB('tiny')
			},
			profile_pic:{
				type: Sequelize.STRING
			}
		}
	)
}