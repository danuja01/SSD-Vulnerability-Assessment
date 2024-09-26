const Fooditemcart = require('../models/fcart.model');

//add a new cart

const addfooditemcart= async (req, res) => {
    const { name,price,total } = req.body;
    try {
      const fooditemcart = await Fooditemcart.create({
        name,price,total
      });
      return res.status(200).json(fooditemcart);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//get all fooditem cart 
const getfooditemcart = async (req, res) => {
    const fooditemcart = await Fooditemcart.find({});
  
    if (!fooditemcart) {
      return res.status(404).json({ message: 'No any foodItems are avaliable' });
    } else {
      return res.status(200).json(fooditemcart);
    }
  };

  const getOneFoodcart = async (req, res) => {
    const { id } = req.params;
    const fooditemcart = await Fooditemcart.findById({ _id: id });
  
    if (!fooditemcart) {
      return res.status(404).json({ message: 'No food  item cart found' });
    } else {
      return res.status(200).json(fooditemcart);
    }
  };
  
 

  //delete fooditem cart
const deletefooditemcart = async (req, res) => {
    const { id } = req.params;
  
    const fooditemcart = await Fooditemcart.findOneAndDelete({ _id: id });
  
    if (!fooditemcart) {
      return res.status(400).json({ error: 'Not such the item' });
    } else {
      return res.status(200).json(fooditemcart);
    }
  };

  

  module.exports = {
    addfooditemcart,
    getfooditemcart,
    getOneFoodcart,
    deletefooditemcart
  };