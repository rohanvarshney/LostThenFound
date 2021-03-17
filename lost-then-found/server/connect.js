const { MongoClient } = require("mongodb");

const express = require('express');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

// initialize express
const app = express();
app.use(express.json());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected...'))
    .catch(err => console.log(err));


// Prints Posts all posts in lost_then_found db
//async function printPosts() {
//    try {
//        await client.connect();
//        const collection = client.db("lost_then_found").collection("posts");
//        var postList = null;
//
//        collection.find().toArray(function (err, posts) {
//        	console.log(posts);
//        	postList = posts;
//        });
//        // perform actions on the collection object
//        await client.close();
//
//        console.log("Connected correctly to server [posts]");
//        return postList;
//
//    } catch (err) {
//        console.log(err.stack);
//        await client.close();
//        return null;
//    }
//}

// Prints Users all users in lost_then_found db
//async function printUsers() {
//    try {
//        await client.connect();
//        const collection = client.db("lost_then_found").collection("users");
//        var userList = null;
//
//        collection.find().toArray(function (err, users) {
//            console.log(users);
//            userList = users;
//        });
//        // perform actions on the collection object
//        await client.close();
//
//        console.log("Connected correctly to server [users]");
//        return userList;
//
//    } catch (err) {
//        console.log(err.stack);
//        await client.close();
//        return null;
//    }
//}

// Prints all users and posts in lost_then_found db
//async function printBoth() {
//    try {
//        await client.connect();
//        const postCollection = client.db("lost_then_found").collection("posts");
//        const userCollection = client.db("lost_then_found").collection("users");
//        var bothList = null;
//
//        postCollection.find().toArray(function (err, posts) {
//            console.log(posts);
//            bothList = posts;
//        });
//        userCollection.find().toArray(function (err, users) {
//            console.log(users);
//            bothList.push(users);
//        });
//        // perform actions on the collection object
//        await client.close();
//
//        console.log("Connected correctly to server [posts and users]");
//        return bothList;
//
//    } catch (err) {
//        console.log(err.stack);
//        await client.close();
//        return null;
//    }
//}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// User Routes
app.use("/api/users", users);

// Use routes (API)
// Description: Any request that goes to /api/posts will go to the 'posts' api file
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));


// logs all posts
// console.log(printPosts());
// console.log(connectToMongoDB());
// console.log(printUsers());
// console.log(printBoth());
