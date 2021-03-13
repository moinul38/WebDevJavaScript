//file system -> node js  modules
//google
let fs= require("fs");
let path = require("path");
function isFileCheker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath){
 return fs.readdirSync(dirPath);
}
function viewFlat(dirPath){
// path -> file/folder

let isFile = isFileCheker(dirPath);
if(isFile==true){
    console.log(dirPath + "*");
}else{
    //directory
    //console.log(
        // print path
        console.log(dirPath);
        //get childrens
        let childrens = readContent(dirPath);
        //call for view flat
        for(let i = 0; i < childrens.length; i++){
            // viewFlat(dirPath+ "/"+ childrens[i]);  
            viewFlat(path.join(dirPath, childrens[i]));   
        }
    //)
    //console.log("children: ", childrens)
}

}

//viewFlat("d10");
//-----------------------------------
//tree

function viewtree(dirPath, indent){
    // path -> file/folder    
    let isFile = isFileCheker(dirPath);
    if(isFile==true){
        console.log(indent, path.basename(dirPath) + "*");
    }else{
        //directory
            console.log(indent, path.basename(dirPath));
            //get childrens
            let childrens = readContent(dirPath);
            //call for view tree
            for(let i = 0; i < childrens.length; i++){
                viewtree(path.join(dirPath, childrens[i]), indent+ "\t");   
            }
        }
    }
    
    viewtree("d10", "", 0);
//how to copy file in node js