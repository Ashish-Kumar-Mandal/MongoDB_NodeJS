const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

async function dbc(){
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('products');
    // let collection = db.collection('products');
    // let records = await collection.find().toArray();
    // console.log(records);
}


/** first method to handle promises */
// dbc().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

/** second method to handle promises */
const main = async ()=>{
    let data = await dbc();
    data = await data.find().toArray();
    console.log(data);
}

main();