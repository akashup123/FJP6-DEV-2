//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require("fs");
let path = require("path");

if(!fs.existsSync("ques1folder"))
fs.mkdirSync("ques1folder");

let filePath = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\ques1folder","file.txt");

fs.writeFileSync(filePath,"hello i am ques 1 text file");
