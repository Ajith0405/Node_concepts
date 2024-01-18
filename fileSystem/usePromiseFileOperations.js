const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
    try{
        // readFile
        const data = await fsPromises.readFile(path.join(__dirname,'notes.txt'),'utf8');
        console.log(data);
        // writeFile
            await fsPromises.writeFile(path.join(__dirname,'notes.txt'),'\n Notes written....');
            console.log("file written successfully...");
        // appendFile
            await fsPromises.appendFile(path.join(__dirname,'notes.txt'),'\n Notes Updated successfully...');
            console.log('appended Successfully...');
        // rename
            await fsPromises.rename(path.join(__dirname,'notes.txt'),path.join(__dirname,'renameNotes.txt'));
            console.log('rename Completed..');
    }
    catch(err){
        console.error(err);
    }
}

fileOps();
console.log("check...");