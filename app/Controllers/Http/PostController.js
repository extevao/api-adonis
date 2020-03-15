'use strict'

class PostController {
    async index({ request, response }) {
        return 'get'
    }

    async store({ request, response }) {
        console.log( request.all() )
        return 'post'
    }
}

module.exports = PostController
