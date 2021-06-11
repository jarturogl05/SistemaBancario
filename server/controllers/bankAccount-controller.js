const sequelize = require("../database/db");
const BankAccount = require("../database/models/BankAccount");
const Client = require("../database/models/Client");
const ID = require("nodejs-unique-numeric-id-generator")


const getAccounts = async (req, res) => {
  const result = await BankAccount.findAll({
    include: {
      model: Client,
      attributes: ["fullname", "address"],
    },
  });
  res.status(200).send(result);
};

const createBankAccount = async (req, res) => {
  const { maxCredit, clientClientNumber } = req.body;

  console.log('ssssss',clientClientNumber);
  const bankAccountNumber = await generateBankAccountNumber();
  try {
    await BankAccount.create({
      bankAccountNumber,
      maxCredit,
      currentCredit: maxCredit,
      clientClientNumber,
    });

    res.status(200).send({bankAccountNumber, maxCredit});
  } catch (e) {
    console.log(e);
    res.status(400).send("error");
  }
};

async function generateBankAccountNumber() {
  id = ID.generate(new Date().toJSON());
  const digits = Math.floor(100000 + Math.random() * 900000);
  return (id + digits).toString();
}

module.exports = { createBankAccount, getAccounts };
