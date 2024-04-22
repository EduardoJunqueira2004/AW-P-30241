const fs = require('fs');

//devolve todos os carros
exports.getAll = async (req, res) => {
    return res.send("Todos os carros");
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //just return same id
    return res.send(id);
}

//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhes, Foto} = req.body;
    //envia o carro criado
    return res.status(201).send(req.body);
}

//atualiza o carro
exports.update = async (req, res) => {
    //obter o carro pelas características enviadas
    const {number, name, city, birthday } = req.body;
    //envia o carro alterado
    return res.send(req.body);
}

//apaga o carro com o id
exports.delete = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //devolve ok
    return res.send("Carro " + id + " apagado!");
}

