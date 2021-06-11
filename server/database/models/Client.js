const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Client extends Model {}
Client.init({
    clientNumber:{
       type: DataTypes.STRING,
       primaryKey: true   
    },
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    isOverdue: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

},{
    sequelize,
    modelName: "client"
});

module.exports = Client;