const express = require("express");
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');








//middlewares
app.use(morgan('dev'));
 
app.use(express.urlencoded({extended: false}));



//routes 
app.use(require('./routes/index'));




//static files 
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
