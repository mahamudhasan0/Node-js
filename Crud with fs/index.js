const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/hello.txt`;

fs.writeFileSync(filePath,"This is a simple file of text");

// fs.readFile(filePath,'utf8',(err,item)=>{
//       console.log(item);
// })

// fs.appendFile(filePath,'now its going to be updated',(err)=>{
//     if(!err) console.log('file is updated')
// })

// fs.rename(filePath,`${dirPath}/second.txt`,(err)=>{
//     if(!err) console.log('file name is updated')
// })

// fs.unlinkSync(`${dirPath}/second.txt`);
