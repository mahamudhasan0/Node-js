const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const SavedInDB = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = new Product({name:"y12",price:250,brand:"Huawei",category:"mobile"});
    const result = await data.save();
    console.log(result);
}
// SavedInDB();
const updateInDB =async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne(
        {name:"y12"},
        {
            $set: {price:300,name:"maxpro"}
        }
    )
} 
// updateInDB();

const deleteInDB =async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne({name:"maxpro"});
    console.log(data);
}
// deleteInDB();

const findInDB =async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.findOne({name:"y12"});
    console.log(data);
};
findInDB();