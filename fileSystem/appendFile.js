const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname,'newFile.txt'),"/n/n Thank You File updated",(err)=>{
    if(err) throw err;
    console.log("Update is completed is completed..");
});
