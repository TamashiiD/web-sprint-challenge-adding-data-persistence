const db = require('../../data/dbConfig')


function get() {
    return db('projects')
        .then(projects => projects.map(project => ({
            ...project, project_completed: project.project_completed ? true : false
        })

        ));
}


function insert(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
        })
        .then(([proj]) => ({ ...proj, project_completed: proj.project_completed ? true : false }));



    // function insert(project) {
    //     return db('projects')
    //       .insert(project, 'project_id')
    //       .then(([project_id]) => {
    //         return db('projects')
    //           .where('project_id', project_id)
    //       })

    //   .then(([proj]) => ({...proj, project_completed: proj.project_completed ? true: false}));
}



// function insert(project) {
//     return db("projects")
//       .insert(project, "project_id")
//       .then(([project_id]) => db("projects").where({ project_id }))
//       .then(([proj]) => ({ ...proj, project_completed: proj.project_completed ? true : false }));
//   }


module.exports = {
    get,
    insert
}