//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");

// let sourcepath1 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module1","index.html");
// let destinationPath1 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\html ques 3","index.html");
// console.log(sourcepath1);
// console.log(destinationPath1);

// fs.copyFileSync(sourcepath1,destinationPath1);


let srcpath = path.join(__dirname,"..","..","..","module1","index.html");
console.log(srcpath);
let destpath = path.join(__dirname,"..","..","index.html");
console.log(destpath);

fs.copyFileSync(srcpath,destpath);
