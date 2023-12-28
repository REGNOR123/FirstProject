const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1><br>
    <a href='/about'>About</a>
    <a href='/help'>help</a>
    `);
})
app.get('/about',(req,res)=>{
    res.send(`<h1>About</h1>
    <br><input type='text' placeholder='User Name' value="${req.query.name}"/>
    <button>Submit</button><br>
    <a href='/'>Home</a>
    <a href='/help'>help</a>
    `);
})
app.get('/help',(req,res)=>{
    res.send([{name:'Anil',email:'anil@test.com'},{name:'Sunil',email:'sunil@test.com'}]);
    
})
app.listen(3000);