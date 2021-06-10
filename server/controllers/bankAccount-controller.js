const sequelize = require('../database/db');
const BankAccount = require('../database/models/BankAccount')
const Client = require('../database/models/Client');


const getAccounts = async (req, res) => {
    const result = await BankAccount.findAll({
        include:{
            model: Client,
            attributes: ['fullname', 'address']
        }
    });
    res.status(200).send(result)
}

const createBankAccount = async (req, res) => {
  const bankAccount = await BankAccount.create(
    {
      bankAccountNumber: 12345,
      maxCredit: 20.12,
      currentCredit: 12.23,
      clientClientNumber: 2281244,
    },
  );

  res.status(200).send(bankAccount)

};


module.exports = {createBankAccount, getAccounts}