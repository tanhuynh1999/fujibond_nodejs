const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
//router
const homeRoute = require('./server/route/home');
const productRoute = require('./server/route/product');


const app = express();
const port = 5000;


//connect router
app.use('', homeRoute);
app.use('', productRoute);

//hbs
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//path
app.set('views', path.join(__dirname, '/client/views/'));
app.use("", express.static(path.join(__dirname, '/client/public/')));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});