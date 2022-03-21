const fs = require('fs');
// const fs = require ('fs').writeFileSync;
fs.writeFileSync("first.txt","Its an non global because it has been imported")
console.log("->>",__dirname); //check the directory
console.log("->>",__filename); //check file name
console.log("hello")
