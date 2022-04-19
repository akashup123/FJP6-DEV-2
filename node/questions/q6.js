//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let folderkapath = path.join(__dirname,"..","unorganised");
// console.log(folderkapath);

let content = fs.readdirSync(folderkapath);
console.log(content);

for(let i = 0; i<content.length; i++){
    let name  = content[i];
    let extName = path.extname(name);

if(extName == ".jpg"){
    console.log("Image File");
}
if(extName == ".mp3"){
    console.log("Audio file");
}
if(extName == ".doc"){
    console.log("doc file");
}
if(extName == ".mp4"){
    console.log("Video file");
}
}