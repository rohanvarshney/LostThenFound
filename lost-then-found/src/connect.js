const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
// const url = "mongodb://rohanvar:lostthenfound@Cluster0.mongodb.net/Production?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const url = "mongodb+srv://rohanvar:lostthenfound@cluster0.lwe2m.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const collection = client.db("sample_analytics").collection("customers");
        console.log(collection);
        // perform actions on the collection object
        client.close();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
