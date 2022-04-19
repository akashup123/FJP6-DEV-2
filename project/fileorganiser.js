let fs = require("fs");
let path = require("path");
let folderpath = process.argv[2];

let folderexists = fs.existsSync(folderpath);

let extensions  = {
    Audio:[".mp3"],
    video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software :[".exe"],
}
if(folderexists){
    
    let files = fs.readdirSync(folderpath);
    for(let i=0;i<files.length;i++){
        // console.log(files[i]);
        let ext = path.extname(files[i]);
        let nameoffolder = giveFolderName(ext);
        // console.log("ext--",ext,"folder--",nameoffolder);
        let pathoffolder = path.join(folderpath,nameoffolder);
        let exist = fs.existsSync(pathoffolder);
        if(exist){
          moveFile(folderpath,pathoffolder,files[i]);
        }else{
            fs.mkdirSync(pathoffolder);
            moveFile(folderpath,pathoffolder,files[i]);
        }  
     }
    // console.log(files);
}
else{
    console.log("please enter a valid path!!");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return 'others'
}

function moveFile(folderpath,pathoffolder,fileName){
    let srcpath = path.join(folderpath,fileName);
    let despath = path.join(pathoffolder,fileName);
    fs.copyFileSync(srcpath,despath);
    fs.unlinkSync(srcpath)
}