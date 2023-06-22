// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll(){
 return db('resources')
}

function insert(resource) {
    return db('resources')
      .insert(resource)
      .returning('*')
      .then(([newResource]) => {
        return newResource;
      });
  }


module.exports = {
    getAll,
    insert
}