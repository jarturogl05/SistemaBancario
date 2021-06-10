const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class BankAccount extends Model{}
BankAccount.init({
    bankAccountNumber:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    maxCredit: DataTypes.DOUBLE,
    currentCredit: DataTypes.DOUBLE,
    hasLatePayment:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    sequelize,
    modelName: "bankAccount"
}
);

module.exports = BankAccount;