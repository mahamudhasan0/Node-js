const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

//  app.use(reqFilter);

route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send("This is a home page");
});

app.get('/users',(req,res)=>{
    res.send("This is a user page");
});
route.get('/about',(req,res)=>{
    res.send("This is a About page");
});
route.get('/contact',(req,res)=>{
    res.send("This is a contact page");
});
app.use('/',route);
app.listen(4000);
