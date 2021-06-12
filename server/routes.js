const express = require('express');
const router = express.Router();

const userController = require('./controllers/user-controller');
const clienController = require('./controllers/client-controller');
const bankAccountController = require('./controllers/bankAccount-controller');
const movementController = require('./controllers/movement-controller');

router.get('/login', userController.login)

router.post('/createClient', clienController.createClient);
router.get('/getClient/:clientNumber', clienController.getClientByNumber);
router.post('/overdueStatusToTrue', clienController.overdueStatusToTrue);
router.post('/overdueStatusToFalse', clienController.overdueStatusToFalse);



router.post('/createAccount', bankAccountController.createBankAccount)
router.get('/getAccounts', bankAccountController.getAccounts );
router.get('/getAccount/:clientNumber', bankAccountController.getAccountsByClientNum);
router.post('/latePaymentStatusToTrue', bankAccountController.LatePaymentStatusToTrue);
router.post('/latePaymentStatusToFalse', bankAccountController.LatePaymentStatusToFalse);


router.post('/createWithdrawal', movementController.createWithdrawal);
router.get('/movements/:bankNumber' , movementController.getMovementByBankAccount);

module.exports = router