const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Receta", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV1
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nivelSaludable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredientes:{
      type: DataTypes.TEXT
    },
    preparacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{
  timestamps:false
});
};
