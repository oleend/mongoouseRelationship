//Variables and Invoke app
const express = require('express')
let app = express()


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
