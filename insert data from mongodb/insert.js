const dbConnect = require('./mongodb');

const insert = async()=>{
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name:'symphone',brand:'symphone12',price:457,category:'mobile'},
            {name:'y23',brand:'vivo',price:487,category:'mobile'}
        ]
    );
    if(result.acknowledged){
        console.log('data inserted')
    }

}
insert();