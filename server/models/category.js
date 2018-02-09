const Mongoose =require("mongoose");
const {Schema} =Mongoose;

const schema= new Schema({
    title:String,
    shortDescription:String,
    icon:String,
    description:String    
});

const Category = Mongoose.model('category',schema);

module.exports=Category;