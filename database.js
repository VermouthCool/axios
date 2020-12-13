let {Router} = require('express');
let express = require('express');
let app = new Router();
app.use(express.json());
app.use(express.json());
let mongo = require('mongoose');
let cookie = require('cookie-parser');
let session = require('express-session');
mongo.connect('mongodb://localhost:27017/demo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongo.connection.on('open',(error)=>{
    if(!error){
        console.log('数据库成功连接');
    }
});
let Schame = mongo.Schema;
let rule = new Schame({
    id:{
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    Date:{
        type:Number,
        default:Date.now()
    }
})
let Student = mongo.model('Students',rule);
app.get('/',(req,res)=>{
   let {id} = req.query;
    Student.findOne({id},{_id:0,Date:0,__v:0},function(error,data){
        if(!error){
            res.send(data);
        }
    })
})
app.put('/',(req,res)=>{
    console.log(req.query.name);
    setTimeout(()=>{
        res.send('jiange')
    },3000)
})
app.post('/',(req,res)=>{
    // console.log('post');
    var {id,name,age} = req.body;
    Student.create({
        id,
        name,
        age
    },(error,data)=>{
        if(!error){
            console.log({id,name,age});
            // res.cookie('name',data.name,{maxAge:1000*30});
            // res.redirect('/usercenter');
            // res.render('./usercenter.ejs',{data});
        }
        res.send({id,name,age})
    })
    // res.cookie('name','jian',{maxAge:1000*10})
    // res.render('./usercenter.ejs',{data:{name:'jian'}});
})
app.delete('/',(req,res)=>{
    // var {id} = req.query;
    // Student.deleteOne({id},function(error,data){
    //     if(!error){
    //         res.send(data)
    //     }
    // })
    res.send('delete');
})
var jian = app;
module.exports={jian,Student};
