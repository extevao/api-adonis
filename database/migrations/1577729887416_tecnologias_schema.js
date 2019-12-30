"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TecnologiasSchema extends Schema {
    up() {
        this.create("tecnologias", table => {
            table.increments()
            table.string('nome').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop("tecnologias")
    }
}

module.exports = TecnologiasSchema;
