const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Client extends Model {}
User.init({
    clientNumber:{
       type: DataTypes.NUMBER,
       primaryKey: true   
    },
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    isOverdue: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }

},{
    sequelize,
    modelName: "client"
});

module.exports = Client;