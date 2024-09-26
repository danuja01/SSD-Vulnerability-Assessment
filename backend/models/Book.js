const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const bookSchema = new Schema({

    ISBN_Number : {
        type: String,
        required: true
    },

    Book_Name : {
        type: String,
         required: true
    },

    Author_Name : {
        type: String,
        required: true
    },

    Location : {
        type: String,
        required: true
    },
    Copies : {
        type: String,
        required: true
    }

})



const book = mongoos.model("book",bookSchema);

module.exports =book;