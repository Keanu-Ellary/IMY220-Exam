//Keanu Ellary u22893459

const { MongoClient } = require('mongodb');

const url = "mongodb+srv://u22893459:l3ob0g0gURdykg67@imy220.jk4tw.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

const client = new MongoClient(url);

async function main() {
    try {
        // Create Connection
        await client.connect();
        console.info("Connected to MongoDB. u22893459");

        // Set Database
        const db = client.db("Practical_5");
        const collection = db.collection("Events");

        const query = {
            locations: {
                $elemMatch: {
                    area: "Brooklyn",
                    capacity: {$gt : 20},
                    date: {
                        $gte : "2022/10/08",
                        $lte: "2022/10/26"
                    }
                }
            }
        };
    
        const results = await collection.find(query, {
            projection: {_id : 0, name : 1, description : 1}
        }).toArray();
    
        console.log(results);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);