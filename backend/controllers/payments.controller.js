let Payment = require("../models/payments.model.js");

//Add new payments

const addPayment = async (req, res) => {
     
        const paymentID = req.body.paymentID;
        const paymentDescription = req.body.paymentDescription;
        const paymentCategory = req.body.paymentCategory;
        const paymentDate = Date(req.body.paymentDate);
        const paymentAmount = Number(req.body.paymentAmount);

        const newPayment = new Payment({
                paymentID,
                paymentDescription,
                paymentCategory,
                paymentDate,
                paymentAmount
      })
  
      newPayment.save().then(()=>{
          res.json("Payment Added");
      }).catch((err)=>{
          console.log(err);
      })

    
  };

  // Get all payments

    const getPayments = async (req, res) => {

    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })
  
  };

  // Delete Payments

 const deletePayment = async (req, res) => {
    let paymentID  = req.params.id;
  
    await Payment.findByIdAndDelete(paymentID)
  
    .then(() => {
        res.status(200).send({status : "payment deleted"});    
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with delete data"});
    })
  };

 
  //Search for payment

const getPayment = async (req, res) => {

    let paymentId = req.params.id;
    Payment.findById(paymentId)
        .then((payment) => {
            res.status(200).send({status: "Payment fetched", payment: payment})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with get payment",error: err.message})
        })
   
}

// Update payment

const updatePayment = async (req, res) => {
    const { id } = req.params;

  const payment = await Payment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!payment) {
    return res.status(400).json({ error: 'No such payment' });
  } else {
    return res.status(200).json(payment);
  }

}



  module.exports = {
    addPayment,
    getPayments,
    deletePayment,
    getPayment,
    updatePayment,
    
  };