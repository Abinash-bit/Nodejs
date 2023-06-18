const express = require('express');



const app = express();

app.use('/add-product' , (req, res, next) => {
    
    res.send('<h1>Hello from Add Products</h1>');
});

app.use('/' , (req, res, next) => {
    
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);