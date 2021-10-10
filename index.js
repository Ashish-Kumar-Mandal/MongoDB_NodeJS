const dbc = require('./Connect_MongoDB');

const getData = async (collectionName)=>{
    let data = await dbc(collectionName);
    data = await data.find().toArray();
    console.log(data);
}

const setData = async (collectionName,newRecords)=>{
    let data = await dbc(collectionName);
    let result = await data.insertOne(newRecords);
    
    if(result.acknowledged){
        console.log("New Record Saved Successfully");
    }else{
        console.log("process Failed");
    }
}

const putData = async (collectionName,condition,updateRecords)=>{
    let data = await dbc(collectionName);
    let result = await data.updateMany(condition,{$set:updateRecords});
    
    if(result.acknowledged){
        console.log("Record Updated Successfully");
    }else{
        console.log("process Failed");
    }
}

const deleteData = async (collectionName,condition)=>{
    let data = await dbc(collectionName);
    let result = await data.deleteMany(condition);
    
    if(result.acknowledged){
        console.log("Record Deleted Successfully");
    }else{
        console.log("process Failed");
    }
}

// setData('products',{"name":"Vivo pro 15", "brand":"Vivo", "price":15999});

// putData('products',{"name":"Shiva"},{"name":"Vivo Hexa", "brand":"Vivo", "price":9999});

// deleteData('products',{"name":"Vivo Hexa"});

getData('products');
