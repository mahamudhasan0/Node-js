const express = require('express');
const path = require ('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

// if we want to get method apply then we shoul follow the above

// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// });

app.listen(3500);