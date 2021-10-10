const dbc = require('./Connect_MongoDB');
const express = require('express');
const app = express();

app.use(express.json());  // Take input in json format from users.

app.get('/', async (req, res)=>{
    let cc = await dbc('products')
    let data = await cc.find().toArray()
    res.send(data)
});

app.post('/', async (req, res)=>{
    let cc = await dbc('products')
    let result = await cc.insertOne(req.body)
    let msg = ""
    result.acknowledged ? msg = "New Record Saved Successfully" : msg = "Insertion Failed"
    res.send(msg)    
});

app.put('/', async (req, res)=>{
    let condition = req.query   // It take condition data in json format from url.
    let cc = await dbc('products')
    let result = await cc.updateMany(condition, {$set:req.body})
    let msg = ""
    result.acknowledged ? result.modifiedCount>0 ? msg = result.modifiedCount+" Records Modified Successfully" : msg = "Records Not Found" : msg = "Updation Failed"  
    res.send(msg)
});

app.delete('/', async (req, res)=>{
    let condition = req.query   // It take condition data in json format from url.
    let cc = await dbc('products')
    let result = await cc.deleteMany(condition)
    console.log(result)
    let msg = ""
    result.acknowledged ? result.deletedCount>0 ? msg = result.deletedCount+" Records Deleted Successfully" : msg = "Records Not Found" : msg = "Deletion Failed"  
    res.send(msg)
});

app.listen(4545);