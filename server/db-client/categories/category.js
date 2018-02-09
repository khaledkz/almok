require("../connection")
const category = require("../../models/category")

const saveCategory = (query,cb)=>{
    category.create(query).then(cb)
}

module.exports={saveCategory};