'use strict'
const posts = [{
    urlPerfil: '',
    loginUsuario: 'rafael',
    horario: '05/12/2016 16:21',
    urlFoto: '',
    id: 3,
    likeada: false,
    likers: [],
    comentarios: [
        {
           login: 'alots',
           texto: 'novo comentario',
           id: 1
        },
        {
            login: 'alots',
            texto: 'novo comentario',
            id: 1
        }
    ],
    comentario: 'comentario da foto'
}]

class InstaluraController {
    async index() {
        try {
            return posts
        } catch (err) {
            console.error(err)
            return response.status(500).send({ error: err.message })
        }
    }

    async store ({ request, response }) {}

    async show ({ params, request, response, view }) {}

    async update ({ params, request, response }) {}

    async destroy ({ params, request, response }) {}
}

module.exports = InstaluraController
