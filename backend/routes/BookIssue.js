const router = require("express").Router();
let book = require("../models/BookIssue");

//insert data
router.route("/issue").post((req,res)=>{

    const Student_ID = req.body.Student_ID;
    const Student_Name = req.body.Student_Name;
    const ISBN_Number = req.body.ISBN_Number;
    const Book_Name = req.body.Book_Name;
    const Date = req.body.Date;

    const issueBook = new book({

        Student_ID,
        Student_Name,
        ISBN_Number,
        Book_Name,
        Date
    })

    issueBook.save().then(()=>{


        res.json("Book Issued!!!");
        
    }).catch((err)=>{
        console.log(err);
    })
})

//retrive data
router.route("/retriveissue").get((req,res)=>{
    book.find().then((books)=>{
        res.json(books)
    }).catch((err)=>
    {
        console.log(err)
    })
    
    })


// update data
//http//Localhost:8070/student/update/
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{ISBN_Number,Book_Name,Author_Name,Publisher,Location} =req.body;

    const updateBook = {
        ISBN_Number,
        Book_Name,
        Author_Name,
        Publisher,
        Location
    }

    const update = await book.findByIdAndUpdate(userId,updateBook)
    .then(() => {
        res.status(200).send({status:"user updated"})

    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({status: "error with updated data"});
    })

    
})

//delete student

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await book.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete data"});
    })
})

//retrive gata only one student

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await book.findById(userId)
    .then((book) =>{
        res.status(200).send({status:"user fetch",book });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with fetch data"});
    })
})


module.exports=router;