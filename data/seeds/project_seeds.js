/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  await knex('project').truncate()
  await knex('resource').truncate()
  await knex('task').truncate()
}

exports.seed = async function (knex) {
  await knex('project').insert([
    {
      project_name: 'admin',
      project_description: 'this is a test',
      project_completed: true
    },
    {
      project_name: 'tester',
      project_description: 'this is a test # 2',
      project_completed: false
    },
  ])
  await knex('resource').insert([
    {
      resource_name: 'this is a test name',
      resource_description: 'hoping this works',
      
    },
    {
      resource_name: 'this is a test name',
      resource_description: 'hoping this seed exists',
      
    },
  ])
  await knex('task').insert([
    {
      task_description: "this is a test description",
      task_notes: "I havent really completed this",
      task_completed: true,
      project_id: 1
    },
    {
      task_description: "this is a test #2 description",
      task_notes: "I HAVE really completed this",
      task_completed: false,
      project_id: 2
    }
  ])
}
