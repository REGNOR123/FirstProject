const express = require('express');  //importing the express module in node js env
const app = express(); //creating an object of impoted module which is express js

app.get('',(request,response)=>{              // useing get() method to get the res and req parametor
    console.log('data sent by browser <<<<>>>> : ',request.query.name);
    response.send('Welcome to Home Page');  // sending some text data as a response by the server to the client browser
     
})
app.get('/about',(request,response)=>{
    response.send('Welcome to About');
})
app.get('/help',(request,response)=>{
    response.send('Welcome to Help');
})
app.listen(5000);   // binding server to a ports