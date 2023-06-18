const http = require('http');

const express = require('express');

const routes = require('./routes.js'); 

const server = http.createServer(routes);

server.listen(3000);