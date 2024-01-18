import { readFile } from 'node:fs';

readFile('./textFileSSSS.txt', (err, data) => {
  if (err) throw err;   
  console.log(data.toString()); 
}); 

//exit on uncaught errors
  process.on('uncaughtException', err =>{
      console.error(`There was an uncaught error : ${err}`);
      process.exit(1);
  })

