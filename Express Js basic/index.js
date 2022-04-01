const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`
    <h1> This is a home page</h1>
    <a href="/about"> Go to about</a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});

app.get('/contact',(req,res)=>{
    res.send(`
      [
          {
              name:"sam";
              email:"sam.test@gmail.com"
          }
      ]
    `);
});

app.listen(4000);