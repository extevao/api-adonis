"use strict";

const Tarefa = use("App/Models/Tarefa");
const Database = use('Database')

class TarefaController {

    async index({ request, response, auth }) {
        // const tarefas = await Tarefa.all()
        // const tarefas = await Tarefa.query().where('user_id', auth.user.id).fetch()
        // const tarefas = Database.select('titulo', 'descricao').from('tarefas').where('user_id', auth.user.id)

        const tarefas = await Tarefa
            .query()
            .where('user_id', auth.user.id)
            .withCount('arquivos as total_arquivos')
            .fetch()


        return tarefas
    }

    async store({ request, response, auth }) {
        const { id } = auth.user;
        const data = request.only(["titulo", "descricao"]);
        const tarefa = await Tarefa.create({ ...data, user_id: id });

        return tarefa;
    }

    async show({ params, request, response, auth }) {
        const tarefa = await Tarefa.query().where('id', params.id).where('user_id', '=', auth.user.id).first()

        if (!tarefa) {
            return response.status(404).send({ message: 'Nenhum registro localizado' })
        }

        await tarefa.load('arquivos')

        return tarefa
    }

    async update({ params, request, response, auth }) {
        const { titulo, descricao } = request.all()

        const tarefa = await Tarefa.query().where('id', params.id).where('user_id', '=', auth.user.id).first()

        if (!tarefa) {
            return response.status(404).send({ message: 'Nenhum registro localizado' })
        }

        tarefa.titulo = titulo
        tarefa.descricao = descricao
        tarefa.id = params.id

        await tarefa.save()

        return tarefa
    }

    async destroy({ params, request, response, auth }) {
        const tarefa = await Tarefa.query().where('id', params.id).where('user_id', '=', auth.user.id).first()

        if (!tarefa) {
            return response.status(404).send({ message: 'Nenhum registro localizado' })
        }

        await tarefa.delete()

        return response.status(200).send({ message: 'registro removido' })
    }
}

module.exports = TarefaController;
