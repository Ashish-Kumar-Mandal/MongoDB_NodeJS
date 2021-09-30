const dbc = require('./Connect_MongoDB');

const getData = async (collectionName)=>{
    let data = await dbc(collectionName);
    data = await data.find().toArray();
    console.log(data);
}

const setData = async (collectionName,newRecords)=>{
    let db = await dbc(collectionName,newRecords);
    let result = await db.insertOne(newRecords);
    
    if(result.acknowledged){
        console.log("New Record Saved Successfully");
    }else{
        console.log("process Failed");
    }
}

const records = {
    "name":"Shiva",
    "brand":"Paypines",
    "price":123654
}

setData('products',records);

getData('products');
