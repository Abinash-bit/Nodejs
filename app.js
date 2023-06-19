const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));







app.use('/' , (req, res, next) => {
    
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);