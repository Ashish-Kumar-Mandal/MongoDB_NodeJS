const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

async function dbc(collectionName){
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection(collectionName);
}

module.exports = dbc;