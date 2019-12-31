'use strict'

/*
|--------------------------------------------------------------------------
| TecnologiaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TecnologiaSeeder {
  async run () {
    await Factory
        .model('App/Models/Tecnologia')
        .createMany(150)
  }
}

module.exports = TecnologiaSeeder
