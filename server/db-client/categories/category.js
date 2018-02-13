require("../connection")
const category = require("../../models/category")

const saveCategory = (query,cb)=>{
    category.create(query).then(cb)
}

const findCategory=(query,cb)=>{
    category.find(query).then(cb);
}

module.exports={saveCategory,findCategory};