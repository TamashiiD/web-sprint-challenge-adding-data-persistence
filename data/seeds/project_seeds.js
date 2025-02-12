/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  await knex('projects').del();
  await knex('projects').insert([
    {
      project_id: 1,
      project_name: 'admin',
      project_description: 'this is a test',
      project_completed: true
    },
    {
      project_id: 2,
      project_name: 'tester',
      project_description: 'this is a test # 2',
      project_completed: false
    },
  ])
  await knex('resources').del();
  await knex('resources').insert([
    //its not truncating
    {
      resource_name: 'gaba',
      resource_description: 'hoping this works',

    },
    {
      resource_name: 'lala',
      resource_description: 'hoping this seed exists',

    },
  ])
  await knex('tasks').del();
  await knex('tasks').insert([
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
