const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class MonthlyPayment extends Model {}
MonthlyPayment.init({
    amount: DataTypes.DOUBLE,
    limitDate: DataTypes.DATEONLY,
    dateRange: DataTypes.RANGE(sequelize.DATEONLY),
    isPaid:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    sequelize,
    modelName: "monthlypayment"
});

module.exports = MonthlyPayment 
