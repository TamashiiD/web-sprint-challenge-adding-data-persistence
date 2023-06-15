// build your `Project` model here
// const knex = require('knex');
// const knexConfig = require('../../knexfile');
// const db = knex(knexConfig.development);

const db = require('../../data/dbConfig')


async function getAll(){
   await db('project')    
}

module.exports = {
    getAll
}