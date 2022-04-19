let fs = require("fs");
const path = require("path");
console.log(fs);

let path = require("path");

// let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);

// // it creates file if it does not exists else it overwrites
// fs.writeFileSync(filePath,"hello i am text File");


// // Read
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// // update
// fs.appendFileSync(filePath,"\n Newly added content");
// console.log(fs.readFileSync(filePath,'utf-8'));

// // delete
// fs.unlinkSync(filePath);


// REVISION AND HOMEWORK GIVEN BY SIR COMPLETED

// let fs = require("fs");
// console.log(fs);

// const path = require("path");

// // let DirPath ="C:\Users\DELL\Desktop\FJP 6\module2\javascript\array.js";
// // console.log(DirPath);

// let extensionName =path.extname("C:\Users\DELL\Desktop\FJP 6\module2\javascript\array.js");
// console.log(extensionName);


// let filePath = path.join(__dirname,"ak.txt");
// console.log(filePath);

// // write or it creates file
// fs.writeFileSync(filePath, "hello from akash i am over writing now");

// // read

// let Content = fs.readFileSync(filePath,'utf-8');
// console.log(Content);

// // update
// fs.appendFileSync(filePath,"\nnewly added content");
// console.log(fs.readFileSync(filePath,'utf-8'));

// // delete
// fs.unlinkSync(filePath);

// create a directory
if(!fs.existsSync("hamari directory"))
fs.mkdirSync("hamari directory");

//read a directory

let folderPath = "C:\\Users\\DELL\\Desktop\\FJP 6\\module1";

let contentofFolder = fs.readdirSync(folderPath);
console.log(contentofFolder);

// delete a directory

fs.rmdirSync("hamari directory");

// copy a directory
let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);