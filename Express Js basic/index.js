const { prototype } = require('events');
const express = require('express');
const { listenerCount } = require('process');
const app = express();

app.get('',(req,res)=>{
    res.send("This is a home page");
});

app.get('/about',(req,res)=>{
    res.send("This is a about page");
});

app.get('/contact',(req,res)=>{
    res.send("This is a home page");
});

app.listen(4000);