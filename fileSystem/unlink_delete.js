const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname,'dummy.txt'),(err)=>{
    if(err) throw err;
    console.log("Deleted Successfully...");
});

