// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");


let folderkaPath = path.join(__dirname , "..","unorganised");

let contentfolder = fs.readdirSync(folderkaPath);
// console.log(contentfolder);
 
let extarr = [];
for(let i = 0; i<contentfolder.length;i++){
    let name = contentfolder[i];
    let extName = path.extname(name);
    extarr.push(extName);
}
console.log(extarr);

