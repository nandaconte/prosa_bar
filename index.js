const express = require('express');
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const exp = require('constants')
const prosaRoute = require('./routes/prosaRoute');
const app = express();


app.use(session({secret: "ssshhhhh"}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.json());

app.use('/', prosaRoute);

///
const port = 3000;
app.listen(port,()=>{
    console.log('servidor rodando')
})

// PRECISA SEPARAR A PARTIR DAQUI!! AS ROTAS GET FORAM CRIADAS 

//ROTAS E CONTROLLERS SEPARA DPS
