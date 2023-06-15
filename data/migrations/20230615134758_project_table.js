/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('project', tbl => {
        tbl.increments("project_id");
        tbl.string("project_name", 128).notNullable()
        tbl.string("project_description")
        tbl.boolean("project_completed").defaultTo(false)
    }).then(() => knex.raw(onUpdateTrigger('project')))

    await knex.schema
        .createTable('resource', (tbl) => {
            tbl.increments("resource_id");
            tbl.string("resource_name").notNullable().unique()
            tbl.string("resource_description")
        }).then(() => knex.raw(onUpdateTrigger('resource')))

    await knex.schema
        .createTable('task', (tbl) => {
            tbl.increments("task_id")
            tbl.string("task_description").notNullable()
            tbl.string("task_notes")
            tbl.boolean("task_completed").defaultTo(false)
            tbl.foreign("project_id").references("project_id")

        }).then(() => knex.raw(onUpdateTrigger('task')))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
await knex.schema
.dropTableIfExists('task')
.dropTableIfExists('resource')
.dropTableIfExists('project')
};
