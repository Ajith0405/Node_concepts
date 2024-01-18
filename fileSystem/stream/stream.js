const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname,'bigfile.txt'),'utf8');
const writeStream = fs.createWriteStream(path.join(__dirname,'new_bigfile.txt'));

// method 1
    // readStream.on('data',(dataChunk)=>{
    //     writeStream.write(dataChunk);
    // })
// method 2 using pipe
    readStream.pipe(writeStream);
    