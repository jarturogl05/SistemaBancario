const Client = require("./models/Client");
const BankAccount = require("./models/BankAccount");
const MonthlyPayment = require("./models/MonthlyPayment");
const Movement = require("./models/Movement");

Client.hasMany(BankAccount);

BankAccount.belongsTo(Client)

BankAccount.hasMany(Movement);

Movement.belongsTo(BankAccount)

BankAccount.hasMany(MonthlyPayment);

MonthlyPayment.belongsTo(BankAccount);


