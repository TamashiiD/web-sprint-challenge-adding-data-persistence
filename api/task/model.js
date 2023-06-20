// build your `Task` model here
const db = require('../../data/db-config')

function getAll(){
    return db('resources')
   }

   function insert(body){
    return db('task')
    .insert(body)
    .then(([id]) => get(id))
    }

module.exports ={
    getAll,
    insert
}
