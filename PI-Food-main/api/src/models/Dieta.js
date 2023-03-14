const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('dieta', {
        id: {

        },
        nombre:{

        }
    },{
        timestamps: false
    })
}