const dbc = require('./Connect_MongoDB');

const getData = async (collectionName)=>{
    let data = await dbc(collectionName);
    data = await data.find().toArray();
    console.log(data);
}
getData('products');
