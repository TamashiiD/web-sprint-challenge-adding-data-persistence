// build your `Project` model here
// const knex = require('knex');
// const knexConfig = require('../../knexfile');
// const db = knex(knexConfig.development);

const db = require('../../data/dbConfig')


function getAll(){
   return db('project');   
}

function insert(body){
return db('projects')
.insert(body)
.then(([id]) => get(id))
}

module.exports = {
    getAll,
    insert
}