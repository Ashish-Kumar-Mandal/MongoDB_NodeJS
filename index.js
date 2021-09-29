const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

async function getAllData(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('products');
    let records = await collection.find().toArray();
    console.log(records);
}

getAllData();
