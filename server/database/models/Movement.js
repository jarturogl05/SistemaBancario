const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Movement extends Model {}
Movement.init({
    date: DataTypes.DATE,
    amount: DataTypes.NUMBER
},{
    sequelize,
    modelName: "movement"
});

module.exports = Movement;