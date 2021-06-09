const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class BankAccount extends Model{}
BankAccount.init({
    banckAccountNumber:{
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    maxCredit: DataTypes.NUMBER,
    currentCredit: DataTypes.NUMBER,
    hasLatePayment:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
},{
    sequelize,
    modelName: "bankAccount"
}
);

module.exports = BankAccount;