const fs = require('fs');       //importing files module to play with file system
const path = require('path');   // importing path module to manupulate the files path
const dirPath = path.join(__dirname,'files');  // using 'path' object to to know the folder('files) directory
// console.log("Path is : ",dirPath); //displaying the file directory of 'files' folder

for(i=0;i<5;i++) // creating multiple files in one command
{
    fs.writeFileSync(dirPath+`/testFile${i}.txt`,`testfile`) // here, Five files will be created under the given folder directory(dirPath) with name testFiles0.txt, testFiles1.txt etc.
}

fs.readdir(dirPath,(err,files)=>{
    files.forEach((items)=>{
        console.log('File Name :',items)
    })
})