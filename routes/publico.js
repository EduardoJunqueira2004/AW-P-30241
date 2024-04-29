const publicoRouter = require('express').Router();
// Define a route for the HTML page
publicoRouter.get('/', (request, res) => {
    // Send the HTML file as a response to the HTTP request
    res.sendFile('/Users/eduardojunqueira/Desktop/AW-P-30241-new/templates/frontend/index.html');//só uma rota para a nossa página inicial
});
module.exports = publicoRouter;