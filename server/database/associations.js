const Client = require("./models/Client");
const BankAccount = require("./models/BankAccount");
const MonthlyPayment = require("./models/MonthlyPayment");
const Movement = require("./models/Movement");

Client.hasMany(BankAccount, { 
    as: "Accounts", 
    foreignKey: "clientNumber" 
});

BankAccount.hasMany(Movement, {
  as: "Movements",
  foreignKey: "bankAccountNumber",
});

BankAccount.hasMany(MonthlyPayment, {
  as: "MonthlyPayment",
  foreignKey: "banckAccountNumber",
});
