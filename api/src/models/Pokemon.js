const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
// defino el modelo
	sequelize.define('Pokemon', {
		id: {
			type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hp: {
			type: DataTypes.FLOAT,
		},
		atk: {
			type: DataTypes.FLOAT,
		},
		def: {
			type: DataTypes.FLOAT,
		},
		spd: {
			type: DataTypes.FLOAT,
		},
		height: {
			type: DataTypes.FLOAT,
		},
		weight: {
			type: DataTypes.FLOAT,
		},
		img: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		}
	}, {
		timestamps: false,
	});
};