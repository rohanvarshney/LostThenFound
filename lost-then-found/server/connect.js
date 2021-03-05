const { MongoClient } = require("mongodb");

const express = require('express');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');

// initialize express
const app = express();
app.use(express.json());

// https://www.codementor.io/@kakarganpat/how-to-setup-react-and-node-js-in-a-project-koxwqbssl

// Replace the following with your Atlas connection string
// const url = "mongodb://rohanvar:lostthenfound@Cluster0.mongodb.net/Production?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const url = "mongodb+srv://0317:lostthenfound@cluster0.lwe2m.mongodb.net/lost_then_found?retryWrites=true&w=majority";
const client = new MongoClient(url);

// async function connectToMongoDB() {
//     try {
//     	// var postList = null;
//
//         await client.connect();
//         const collection = client.db("lost_then_found").collection("posts");
//         var postList = null;
//
//         collection.find().toArray(function (err, posts) {
//         	// console.log(posts);
//         	postList = posts;
//         });
//
//         // perform actions on the collection object
//         await client.close();
//
//         // console.log(postList);
//         console.log("Connected correctly to server");
//         return postList;
//
//     } catch (err) {
//         console.log(err.stack);
//         await client.close();
//         return null;
//     }
// }



// Database Configuration
const db = require('./keys').mongoURI;

// Connect to mongodb
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));


// Prints Posts all posts in lost_then_found db
async function printPosts() {
    try {
        await client.connect();
        const collection = client.db("lost_then_found").collection("posts");
        var postList = null;

        collection.find().toArray(function (err, posts) {
        	console.log(posts);
        	postList = posts;
        });
        // perform actions on the collection object
        await client.close();

        console.log("Connected correctly to server");
        return postList;

    } catch (err) {
        console.log(err.stack);
        await client.close();
        return null;
    }
}


// Use routes (API)
// Description: Any request that goes to /api/posts will go to the 'posts' api file
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));


// logs all posts
console.log(printPosts());
// console.log(connectToMongoDB());