/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('projects', tbl => {
        tbl.increments("project_id");
        tbl.string("project_name", 128).notNullable()
        tbl.string("project_description")
        tbl.boolean("project_completed").defaultTo(false)
    }),

    knex.schema
        .createTable('resources', (tbl) => {
            tbl.increments("resource_id");
            tbl.string("resource_name").notNullable().unique()
            tbl.string("resource_description")
        }),

    knex.schema
        .createTable('tasks', (tbl) => {
            tbl.increments("task_id")
            tbl.string("task_description").notNullable()
            tbl.string("task_notes")
            tbl.boolean("task_completed").defaultTo(false)
            tbl.integer("project_id").references("project_id").inTable("projects")
            //.inTable("projects").notNullable()

        })
    ])
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
