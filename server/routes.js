const express = require('express');
const router = express.Router();

const userController = require('./controllers/user-controller');
const clienController = require('./controllers/client-controller');
const bankAccountController = require('./controllers/bankAccount-controller');

router.get('/login', userController.login)

router.post('/createClient', clienController.createClient);
router.get('/getClient/:clientNumber', clienController.getClientByNumber);

router.post('/createAccount', bankAccountController.createBankAccount)
router.get('/getAccounts', bankAccountController.getAccounts );
router.get('/getAccount/:clientNumber', bankAccountController.getAccountsByClientNum);

module.exports = router