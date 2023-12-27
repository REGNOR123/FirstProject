/*C-Copy or create new File, R-Read, U-Update, D-Delete*/
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/'copyTest.txt`;

fs.writeFileSync(filePath,'This file has created'); // File is created

fs.readFile(filePath,'utf8',(err,item)=>{console.log(item);}); // Data read

fs.appendFile(filePath,'\nNow, Updated successfully ',(err)=>{if(!err){
    console.log('File Updated');
}})

fs.unlinkSync(`${filePath}/copyTest`) //Delete te file