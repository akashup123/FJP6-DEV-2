// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr = ['audio','video','software','documents','applications','other'];
let nameArr = ['abc','efg','xyz','def'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];
let organisePath = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\module","organise");
if(!fs.existsSync(organisePath));
fs.mkdirSync(organisePath);


for(let i = 0; i<arr.length; i++){
    let folderkapath = path.join(organisePath,arr[i]);
    (!fs.existsSync(folderkapath));
    fs.mkdirSync(folderkapath);
    for(let j = 0; j<nameArr.length;j++){
    let fileName = nameArr[j] + extArr[i];
    let filekapath = path.join(folderkapath,fileName);
    fs.writeFileSync(filekapath,"");
    }
}



// // audio

// if(!fs.existsSync("audiofolder"))
// fs.mkdirSync("audiofolder");

// let filepath1 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\audiofolder","audio.mp3");
// fs.writeFileSync(filepath1,"hi i am audio");


// // video

// if(!fs.existsSync("videofolder"))
// fs.mkdirSync("videofolder");

// let filepath2 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\videofolder","video1.mp4");
// fs.writeFileSync(filepath2,"hi i am video");

// // image

// if(!fs.existsSync("imagefolder"))
// fs.mkdirSync("imagefolder");

// let filepath3 =path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\imagefolder","image4.jpg");
// fs.writeFileSync(filepath3,"hi i am image file");

// // software

// if(!fs.existsSync("softwarefolder"))
// fs.mkdirSync("softwarefolder");

// let filepath4 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\softwarefolder","soft3.zip");
// fs.writeFileSync(filepath4,"hi i am software 1");

// // document
// if(!fs.existsSync("documentsfolder"))
// fs.mkdirSync("documentsfolder");

// let filepath5 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\documentsfolder","file4.doc");
// fs.writeFileSync(filepath5,"hi i am doc file");

// // app 

// if(!fs.existsSync("apppdffolder"))
// fs.mkdirSync("apppdffolder");

// let filepath6 = path.join("C:\\Users\\DELL\\Desktop\\FJP 6\\module2\\node\\questions\\apppdffolder","ak4.pdf");
// fs.writeFileSync(filepath6,"hi i am app pdf");

