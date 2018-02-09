 require('../connection')
const Article = require('../../models/Article');

const saveArtice=(query,cb)=>{
    Article.create(query).then(cb)
  }
 
  
module.exports={saveArtice};