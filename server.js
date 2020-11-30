// let express = require('express');
// let app = express();
// app.listen('8080');
// app.use(express.static("."));
// app.use(express.urlencoded({extended:true}));
// app.get('/',(req,res)=>{
//     res.send('get');
//     console.log('get');
// });
// app.use((req,res,next)=>{
//     next();
//     console.log('中间件');
// })
var express = require('express');
var app = express();
app.listen('8080');
app.use(express.static('../tupian'));
app.use(express.urlencoded({extended:true}));
// app.get('/',function(req,res){
//     console.log('get');
//     var {callback} = req.query;
//     res.send(`${callback}('jian')`)
//     var {name,age} = req.query;
//     console.log(name,age);
// });
// app.post('/',function(req,res){
//     // var {callback} = req.body;
//     // res.send(`${callback}('jian')`);
//     // console.log(callback);
//     console.log(req.query.name);
//     res.send('post');
// })