const router = require('express').Router();

const {
    addPayment,
    getPayments,
    deletePayment,
    getPayment, 
    updatePayment
  } = require('../controllers/payments.controller.js');

//add new payment
router.post('/addPayment/', addPayment);

// get all payments
router.get('/getPayments/',getPayments);

// delete specific payment
router.get('/deletePayment/:id', deletePayment);

// Search for payment
router.get('/search/:id',getPayment);

//Update Payment
router.post('/updatePayment/:id',updatePayment);

module.exports = router;
