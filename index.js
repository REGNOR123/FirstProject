// const myServer = require('http') // importing 'http' modeule to create server
const colors = require('colors')
// myServer.createServer((request,response)=> {              // 'createServer' alwayes recive two functions as a parameter

//     response.write("Hello World".red); // we are sending some response to the client.
//     response.end();  // in order to end the response used end(), otherwise nodeJs keep responding.

// }).listen('1999'); // using method 'createServer' and binding it with a port ,where it be will run
console.log("Hello World".red);
console.log("Hello World".white);
console.log("Hello World".green);