//Variables and Invoke app (node and express)
const express = require('express')
let app = express()

//MongoDB Connecction
const mongoose =require('mongoose')

//Connect to the Database
mongoose.connect('mongodb://localhost/blogTesting')
.then(function(){
    console.log('Connection Successfull')
})
.catch( (error) => {

    console.log(error)
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
