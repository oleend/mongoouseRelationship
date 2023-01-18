//Variables and Invoke app (node and express)
const express = require('express')
let app = express()

//MongoDB Connecction
const mongoose = require('mongoose')


//Connect to the Database, collection(Table): Document is the model, collumns is the schema, have to use loopback numbers
mongoose.connect('mongodb://127.0.0.1/blogTesting')
    .then(function () {
        console.log('Connection Successfull')
    })
    .catch((error) => {

        console.log(error)
    })

//model and schema
//Embedded Document Relationship
const Author = mongoose.model("author", {


    // WHERE WE LEFT OFF ADDING UNIQUE IDENTIFIERS
    name: { Type: String, unique: String },
    numberBooks: Number,
    books: [{
        title: String,
        publishData: String,
    }]
})

//Different ID for each one from within each entry
Author.create({
    name: 'J.K Rolling',
    numberBooks: "5",
    books: [{ title: "HP1", publishData: "2000" }, { title: "HP2", publishData: "2001" }, { title: "HP3", publishData: "2003" }, { title: "HP4", publishData: "2007" }, { title: "HP5", publishData: "2009" }]
})

    .then((result) => {
        console.log(result);

    })

    .catch((eror) => {
        console.log(error);
    })


//Server Path -- default
app.get('/', (req, res) => {
    try {
        res.send({ 'message': "This is a test" })
    } catch (error) {
        res.send('Server Error: 400')
        console.log(error)
    }

})


//midware


//server listen if on
app.listen(8080, function () {

    console.log("Server is Listening on port  8080")
})
