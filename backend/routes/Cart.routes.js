const router = require('express').Router();

const {
    addfooditemcart,
    getfooditemcart,
    getOneFoodcart,
    deletefooditemcart
  } = require('../controllers/fcart.contoller');
  
// add new item
router.post('/', addfooditemcart);
//get all items
router.get('/' ,getfooditemcart);
//delete
router.delete('/:id' ,deletefooditemcart);
router.get('/:id', getOneFoodcart);



module.exports = router;
