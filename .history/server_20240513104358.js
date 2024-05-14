require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const router = require('./routes/index');
//const Pgs = require('./routes/pgs/index');
const publicoRouter = require('./routes/publico');
const privadoRouter = require('./routes/privado');

const app = express();
app.use(bodyParser.json());
app.use(cors());
//criar uma rota estática
app.use(express.static('templates/frontEnd'));
//app.use('/', publicoRouter);
app.use('/bo/', privadoRouter);
app.use('/bo/', privadoRouter);
app.use('/api/', router);
const routerPgs = require('./routerPgs'); // Importe o arquivo de roteador adequado
app.use('/api/pgs/', routerPgs);

const port = process.env.SERVER_PORT || 4240;
app.listen(port, () => {
    console.log('Express server listening on port',port)
});
