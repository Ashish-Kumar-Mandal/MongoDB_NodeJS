const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

const dbc = async (collectionName)=>{
    let conn = await client.connect();
    let db = conn.db(dbName);
    return db.collection(collectionName);
}

module.exports = dbc;