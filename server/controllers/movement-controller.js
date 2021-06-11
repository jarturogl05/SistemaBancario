const sequelize = require("../database/db");
const Movement = require("../database/models/Movement");
const BankAccount = require("../database/models/BankAccount");

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

module.exports = { createWithdrawal, getMovementByBankAccount };
