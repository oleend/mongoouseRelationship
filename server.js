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

    // Embeded Association
    name: { type: String, unique: true },
    numberBooks: Number,
    books: [{
        title: String,
        publishData: String,
    }]
})

const Movie = mongoose.model("movie", {
    name: { type: String, unique: true },
    releaseDate: {type: Number},
    rating:  {type : Number},
    actors: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "actor"
    }]
})

const Actor = mongoose.model("actor", {
    name: {type: String, unique: true},
    popularity : {type: String},
    movies : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "movie"
    }]
})


//Different ID for each one from within each entry
// Author.create({
//     name: 'J.K Rolling',
//     numberBooks: "5",
//     books: [{ title: "HP1", publishData: "2000" }, { title: "HP2", publishData: "2001" }, { title: "HP3", publishData: "2003" }, { title: "HP4", publishData: "2007" }, { title: "HP5", publishData: "2009" }]
// })

//     .then((result) => {
//         console.log(result);

//     })

//     .catch((eror) => {
//         console.log(error);
//     })

    //Movie
    Movie.create({
        name: 'Star Wars 6: Return of the Jedi',
        releaseDate: '1989',
        rating: 10
    })
    //Actor ID 63cb202a9d2812a9f5371217 - Mark Hammil Movies and Actors using some form of key (ID) left off
    .then((result) => {
        console.log(result);

    })
    .catch((error) => {
        console.log(error);
    })

    //Actor
    Actor.create({
        name: 'R2-D3',
        popularity: 'Unknown',
        movies: ["63cf13d2a8a7f8fa04fd4da6"]
   
    })
    //This is not updating Correcttlly Where we stopped off
    .then((result) => {
        console.log(result);
        return Movie.findByIdAndUpdate("63cf13d2a8a7f8fa04fd4da6", {
            $addToSet : {actors : result._id}
        }) 
           
    })
    .then((result) => {
        console.log(result)
    }) 
    .catch((error) => {
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
