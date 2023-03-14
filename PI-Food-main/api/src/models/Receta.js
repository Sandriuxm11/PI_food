const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('receta', {
    id: {

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {

    },
    resumen_plato: {

    },
    nivel_saludable: {

    },
    paso_paso: {

    }
  },{
  timestamps:false
});
};
