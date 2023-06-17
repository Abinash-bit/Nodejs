const http = require('http');

const routes = require('./routes.js'); 

const server = http.createServer(routes);

server.listen(3000);