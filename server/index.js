const express=require('express');
const path=require('path');
var app=express();


app.set('views', path.join(__dirname, 'public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var contact=require('./routes/contact.js');
app.use('/',contact);


app.listen(4001,function(){
    console.log('running in port 4000');
});