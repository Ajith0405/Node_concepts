const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'create_update_renameFile.txt'), 'Hi this is Create, Append and Rename file to avoid async operation err' , (err)=>{
    if(err) throw err;
    console.log("write completed");
    fs.appendFile(path.join(__dirname,'create_update_renameFile.txt'),'\n\n words upadted successfully...', (err)=>{
        if(err) throw err;
        console.log("appended successfully...");
        fs.rename(path.join(__dirname,'create_update_renameFile.txt'),path.join(__dirname,'fileRenamed.txt'), (err)=>{
            if(err) throw err;
            console.log("Rename completed...");
        });
    });
});


