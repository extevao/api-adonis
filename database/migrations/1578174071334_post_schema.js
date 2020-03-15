'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
    up() {
        this.create('posts', table => {
            table.increments()
            table.string('foto').notNullable()
            table.text('comentario')
            table.boolean('likeada').defaultTo(false)
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('posts')
    }
}

module.exports = PostSchema
