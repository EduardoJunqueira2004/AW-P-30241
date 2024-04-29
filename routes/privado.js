const privadoRouter = require('express').Router();
// Define uma rota para a página HTML
privadoRouter.get('/gerirCarros', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/Users/eduardojunqueira/Desktop/AW-P-30241-new/templates/backOffice/tabelaCarros.html');
});
module.exports = privadoRouter;