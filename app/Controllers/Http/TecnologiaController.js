'use strict'

const Tecnologia = use('App/Models/Tecnologia')

class TecnologiaController {

  async index ({ response, request }) {
      try {
          const paginate = request.get()

          const tecnologias = await Tecnologia
            .query()
            .paginate(paginate.page, paginate.perPage)

          return tecnologias
      } catch (err) {
          console.error(err)
          return response.status(500).send({ error: err.message })
      }
  }

  async store ({ request, response }) {
      try {
          const tecnologia = await Tecnologia.create(request.all())

          return tecnologia
      } catch (err) {
        console.error(err)
        return response.status(500).send({ error: err.message })
      }
  }


  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TecnologiaController
