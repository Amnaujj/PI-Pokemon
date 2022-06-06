const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
// defino el modelo
	sequelize.define('pokemon', {
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
		life: {
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
		}
	}, {
		timestamps: false,
	});
};

// ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
// Nombre *
// Vida
// Ataque
// Defensa
// Velocidad
// Altura
// Peso