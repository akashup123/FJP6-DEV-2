//move a file
let fs = require("fs");
let path = require("path");

let srcpath = path.join(__dirname,"file5.txt");
console.log(srcpath);
let destpath = path.join(__dirname,"ques1folder","file5.txt");
console.log(destpath);
fs.copyFileSync(srcpath,destpath);

fs.unlinkSync(srcpath);
