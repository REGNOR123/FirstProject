// const http = require('http');
// const data = require('./data');
// http.createServer((request,response) =>{
//     response.writeHead(200,{'content-Type':'application/json'});
//     response.write(JSON.stringify(data));
//     response.end();
// }).listen(5000);



// const myServer = require('http') // importing 'http' modeule to create server
// const colors = require('colors')
// myServer.createServer((request,response)=> {              // 'createServer' alwayes recive two functions as a parameter

//     response.write("Hello World".red); // we are sending some response to the client.
//     response.end();  // in order to end the response used end(), otherwise nodeJs keep responding.

// }).listen('1999'); // using method 'createServer' and binding it with a port ,where it be will run



const express = require('express');  //importing express framwork to create server
const path = require('path');  // importing path module to create the required folder path
const app = express(); // creating application object from express
const rootFolderPath = path.join(__dirname,'public');   // crrent directory + folder name

// app.use(express.static(rootFolderPath));  //use method used to get the html files, static method will load the html static pages 
app.get('/',(req,res)=>{
    res.sendFile(`${rootFolderPath}/index.html`);       // using sendfile method to remove .html extension from the url
})
app.get('/help',(req,res)=>{
    res.sendFile(`${rootFolderPath}/help.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${rootFolderPath}/about.html`);
})
app.get('*',(req,res)=>{
    res.sendFile(`${rootFolderPath}/page404.html`);
})
app.listen(5000); // finally, binding the app application with a port, run on localhost:5000

/*When this 'index,js' will be execute then it will automaticalyy detect the 'index.html' file within the given folder directory*/