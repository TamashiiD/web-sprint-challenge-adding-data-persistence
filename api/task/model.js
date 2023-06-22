// build your `Task` model here

const db = require('../../data/dbConfig')





function get() {
    return db('tasks as t')
      .join('projects as p', 't.project_id', 'p.project_id')
      .select(
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description'
      )
      .then((tasks) =>
        tasks.map((task) => ({
          ...task,
          task_completed: task.task_completed ? true : false,
        }))
      );
  }



function insert(task) {
    return db('tasks')
        .insert(task)
        .then((task_id) => {
            return db('tasks')
                .where(task_id, "task_id")
        })
}




// function insert(task) {
//     return db('tasks')
//         .insert(task, "task_id")
//         .then(([task_id]) => {
//             return db('tasks')
//                 .where(task_id, "task_id")
//         })
// }



module.exports = {
    get,
    insert
}
