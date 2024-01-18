const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'writeAppend.txt'), 'Hi this is write and append file to avoid async operation err' , (err)=>{
    if(err) throw err;
    console.log("write completed");
    fs.appendFile(path.join(__dirname,'writeAppend.txt'),'\n\n words upadted successfully...', (err)=>{
        if(err) throw err;
        console.log("appended successfully...");
    })
});


