const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Movement extends Model {}
Movement.init({
    amount: DataTypes.DOUBLE,
    type: DataTypes.STRING
},{
    sequelize,
    modelName: "movement"
});

module.exports = Movement;