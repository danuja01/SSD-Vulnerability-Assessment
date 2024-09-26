const router = require('express').Router();
const { request } = require('express');
let Item = require('../models/items.model');

const ItemController = require('../controllers/items.controller.js');

router.post('/add', ItemController.createItem);

router.get('/get-item', ItemController.getItems);

router.delete('/delete/:id', ItemController.deleteItem);

router.put('/update/:id', ItemController.updateItem);

module.exports = router;
