const { MongoClient } = require("mongodb");

// https://www.codementor.io/@kakarganpat/how-to-setup-react-and-node-js-in-a-project-koxwqbssl

// Replace the following with your Atlas connection string
// const url = "mongodb://rohanvar:lostthenfound@Cluster0.mongodb.net/Production?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const url = "mongodb+srv://0317:lostthenfound@cluster0.lwe2m.mongodb.net/lost_then_found?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connectToMongoDB() {
    try {
    	// var postList = null;

        await client.connect();
        const collection = client.db("lost_then_found").collection("posts");
        var postList = null;

        collection.find().toArray(function (err, posts) {
        	// console.log(posts);
        	postList = posts;
        });
        // perform actions on the collection object
        await client.close();

        console.log(postList);
        console.log("Connected correctly to server");
        return postList;

    } catch (err) {
        console.log(err.stack);
        await client.close();
        return null;
    }
}

console.log(connectToMongoDB());
