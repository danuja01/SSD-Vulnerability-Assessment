const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const bookSchema = new Schema({


    Student_ID : {
        type: String,
        required: true
    },

    Student_Name : {
        type: String,
        required: true
    },

    ISBN_Number : {
        type: String,
        required: true
    },

    Book_Name : {
        type: String,
         required: true
    },

    Date : {
        type: String,
        required: true
    },


})



const bookissue = mongoos.model("BookIssue",bookSchema);

module.exports =bookissue;