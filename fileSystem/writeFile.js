const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'newFile.txt'),"Hi New file is created successfully",(err)=>{
    if(err) throw err;
    console.log("Write is completed..");
});
