require("../connection")
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

module.exports={saveCategory,findCategory,findSingleCategory};