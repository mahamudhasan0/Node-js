const dbConnect = require('./mongodb');

const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.update(
        {name:'y23'},{
            $set:{name:'y23 pro', price:258}
        }
    );
    console.log(result);
}
updateData();