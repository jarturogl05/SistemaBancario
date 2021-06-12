const sequelize = require("../database/db");
const Movement = require("../database/models/Movement");
const BankAccount = require("../database/models/BankAccount");
const { Op } = require("sequelize");
const Client = require("../database/models/Client");

const getMovementByBankAccount = async(req, res) => {

    bankAccountNumber = req.params.bankNumber;
    try{
        const result = await Movement.findAll({
            attributes: ['amount', 'type', 'createdAt'],
            where:{
                bankAccountBankAccountNumber: bankAccountNumber
            }
        });
        res.status(200).send(result);
    }catch(e){
        console.log(e);
        res.status(404).send('error');

    } 


}

const createWithdrawal = async (req, res) => {
  const { bankAccountBankAccountNumber, amount } = req.body;
  const bankAccountInfo = await BankAccount.findByPk(
    bankAccountBankAccountNumber
  );
  console.log(bankAccountInfo.currentCredit);

  if (amount <= bankAccountInfo.currentCredit) {
    const currentCredit = bankAccountInfo.currentCredit - amount;
    try {
      await sequelize.transaction(async (t) => {
        await Movement.create(
          {
            amount,
            type: "withdrawal",
            bankAccountBankAccountNumber,
          },
          { transaction: t }
        );

        await BankAccount.update(
          {
            currentCredit,
          },
          {
            where: {
              bankAccountNumber: bankAccountBankAccountNumber,
            },
          },
          { transaction: t }
        );

        res
          .status(200)
          .send({ amount, currentCredit, bankAccountBankAccountNumber });
      });
    } catch (e) {
      console.log(e);
      res.status(400).send("db error");
    }
  } else {
    res.status(200).send("no money");
  }
};

const movementReport = async (req, res) => {
  const {startDate, finishDate} = req.params;
  const result = await Movement.findAll({
    attributes: ['amount', 'type'],
    where:{
      createdAt:{
        [Op.between]: [startDate, finishDate]
      }
    },
    include:[{
      model:BankAccount,
      required: true,
      attributes: ['bankAccountNumber'],

      include:[{
        model:Client, 
        required:true,
        attributes: ['fullname'],
      }]
    }]
  })
  res.status(200).send(result)

}

module.exports = { createWithdrawal, getMovementByBankAccount, movementReport };
