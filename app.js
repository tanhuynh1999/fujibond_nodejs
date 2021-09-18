const express = require('express');
//router
const homeRoute = require('./server/route/home');


const app = express();
const port = 5000;


//connect router

app.use('', homeRoute);

//hbs


//path



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});