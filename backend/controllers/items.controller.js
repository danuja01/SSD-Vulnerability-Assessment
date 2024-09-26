const Item = require('../models/items.model');

exports.createItem = (req, res) => {
  console.log(req.body);

  const { invoice_No, date, item_Name, quantity, price } = req.body;

  const newItem = new Item({
    invoice_No,
    date,
    item_Name,
    quantity,
    price,
  });

  newItem
    .save()
    .then((itemDetails) => {
      res
        .status(200)
        .send({ message: 'Item Added to DB', payload: itemDetails });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getItems = (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteItem = (req, res) => {
  console.log(req.params.id);
  Item.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.updateItem = async (req, res) => {
  let userId = req.params.id;
  const invoice_No = Number(req.body.invoice_No);
  const date = Date(req.body.date);
  const item_Name = req.body.item_Name;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);

  const updateItem = {
    invoice_No,
    date,
    item_Name,
    quantity,
    price,
  };

  await Item.findOneAndUpdate(userId, updateItem)
    .then((update) => {
      res.status(200).send({ status: 'user updated', user: update });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: 'error with updating data', error: err.message });
    });
};
