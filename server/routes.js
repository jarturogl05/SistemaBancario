const express = require('express');
const router = express.Router();

const userController = require('./controllers/user-controller');
const clienController = require('./controllers/client-controller');
const bankAccountController = require('./controllers/bankAccount-controller');

router.get('/login', userController.login)

router.post('/createClient', clienController.createClient)

router.post('/createAccount', bankAccountController.createBankAccount)
router.get('/getAccounts', bankAccountController.getAccounts );

module.exports = router