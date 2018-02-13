 require("../connection")
  const ObjectId = require('mongodb').ObjectID;
 const Category = require("../../models/category")

const saveCategory = (query,cb)=>{
    Category.create(query).then(cb)
}

const findCategory=(query,cb)=>{
    Category.find(query).then(cb);
}

const findSingleCategory=(singleCategory,cb)=>{
 
    Category.findById(singleCategory).then(cb);
}

const removeCategory=(category,cb)=>{
    Category.remove({"_id":ObjectId(category)}).then(cb);
}

module.exports={saveCategory,findCategory,findSingleCategory,removeCategory};