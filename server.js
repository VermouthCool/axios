let express = require('express');
let database = require('./database.js');
let app = express();
app.listen('8080');
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./');
app.use(database.jian);
app.use(express.static('./'));