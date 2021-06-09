const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    username:{
       type: DataTypes.STRING,
       primaryKey: true   
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
},{
    sequelize,
    modelName: "user"
});

module.exports = User;