const dbConnect = require('./mongodb');

const deleteData = async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name:'symphone'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log('data deleted')
    }
};
deleteData();