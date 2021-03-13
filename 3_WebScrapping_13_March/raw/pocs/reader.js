let fs = require("fs");
console.log("Before");

// let data = fs.readFileSync("f1.txt");
fs.readFile("f1.txt",cb);
function cb(err, data){
    console.log("content->" + data)
}

console.log("After");
console.log("other work");