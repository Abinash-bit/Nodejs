const express = require('express');



const app = express();

app.use('/add-product' , (req, res, next) => {
    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add products</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/' , (req, res, next) => {
    
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);