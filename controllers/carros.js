const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data', 'local', 'data.json');

//devolve todos os carros
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = 
fs.readFileSync("./controllers/data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os carros
    return res.send(data.carros);
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = 
fs.readFileSync("./controllers/data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar um carro com o id
    const carros = data.carros.filter(carros => 
carros.id == id);
    //devolve o carro
    res.send(carros);
}

//cria um carro
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhe, Foto} = req.body;
     //ler o ficheiro local
     const datajson = 
fs.readFileSync("./controllers/data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar carro à lista
    data.carros.push(req.body);
    //Criar o novo ficheiro com o carro adicionado
    fs.writeFileSync('./controllers/data/local/data.json.json', 
JSON.stringify(data));
    //devolve o novo carro
    return res.status(201).send(req.body);
}

//atualiza o carro
    exports.update = async (req, res) => {
        //obter o carro pelas características enviadas
        const {id, Marca, Detalhe, Foto} = req.body;
         //ler o ficheiro local
         const datajson = 
    fs.readFileSync("./controllers/data/local/data.json.json", "utf-8");
         //parse do json
         const data = JSON.parse(datajson);
         //procurar o carro para actualizar
        const carros = data.carros.find(carro => carro.id == 
    id);
        //atualizar as caraterísticas
        carros.Marca = Marca;
        carros.Detalhe = Detalhe;
        carros.Foto = Foto;
        //actualizar no ficheiro json
        fs.writeFileSync('./controllers/data/local/data.json.json', 
    JSON.stringify(data));
        //devolver o carro alterado
        return res.send({id, Marca, Detalhe, Foto});
    }


//apaga o carro com o id
//apaga o carro com o id
exports.delete = async (req, res) => {
    //obter o id do carro
    const id = req.params.id;
     //ler o ficheiro local
     const datajson = 
fs.readFileSync("./controllers/data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //find student to delete
    const carro = data.carros.filter(carro => carro.id 
== id);
    //delete student
    data.carros.splice(carro, 1);
    //update local database
    fs.writeFileSync('./controllers/data/local/data.json', 
JSON.stringify(data));
    //devolve id do carro apagado
    return res.send("Apaguei o carro com id=" + id);
}


