// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll(){
 return db('resources')
}

function insert(body){
    return db('resource')
    .insert(body)
    .then(([id]) => get(id))
    }
module.exports = {
    getAll,
    insert
}