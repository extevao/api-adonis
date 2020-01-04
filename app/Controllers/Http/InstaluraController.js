"use strict";
const posts = [
    {
        id: 3,
        urlPerfil: "",
        loginUsuario: "Mantega",
        horario: "05/12/2016 16:21",
        urlFoto: "",
        likeada: false,
        likers: [],
        comentarios: [
            {
                login: "alots",
                texto: "novo comentario",
                id: 1
            },
            {
                login: "alots",
                texto: "outro comentario",
                id: 2
            }
        ],
        comentario: "comentario da foto"
    },
    {
        id: 4,
        urlPerfil: "",
        loginUsuario: "Mantega",
        horario: "05/12/2016 16:21",
        urlFoto: "",
        likeada: false,
        likers: [],
        comentarios: [
            {
                login: "alots",
                texto: "novo comentario",
                id: 4
            },
            {
                login: "alots",
                texto: "outro comentario",
                id: 5
            }
        ],
        comentario: "comentario da foto"
    }
];

class InstaluraController {
    async index() {
        try {
            return posts;
        } catch (err) {
            console.error(err);
            return response.status(500).send({ error: err.message });
        }
    }

    async login({ request, response }) {
        const credentials = request.all()

        if (!credentials.login && !credentials.senha)
            return response.status(401).send({ error: 'Erro login' })

        return 'TOKEN'
    }

    async store({ request, response }) {}

    async show({ params, request, response, view }) {}

    async update({ params, request, response }) {}

    async destroy({ params, request, response }) {}
}

module.exports = InstaluraController;
