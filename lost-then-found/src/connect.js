const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
// const url = "mongodb://rohanvar:lostthenfound@Cluster0.mongodb.net/Production?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const url = "mongodb+srv://0317:lostthenfound@cluster0.lwe2m.mongodb.net/lost_then_found?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
    	var postList = null;

        await client.connect();
        const collection = client.db("lost_then_found").collection("posts");
        
        collection.find().toArray(function (err, posts) {
        	console.log(posts);
        	// postList = posts;
        });
        // perform actions on the collection object
        client.close();

        console.log(postList);
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
