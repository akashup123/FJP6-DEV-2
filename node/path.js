"C:\Users\DELL\Desktop\FJP 6\module2\node\childprocess.js"

const { Console } = require("console");
const { basename } = require("path");
let path = require("path");
// console.log(path);

let extensionName =path.extname("C:\Users\DELL\Desktop\FJP 6\module2\node\childprocess.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);


// console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);