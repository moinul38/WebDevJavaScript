// commmand 
//view   --tree, --flat
//organize  same folder,  multiple folder
//help

// node mycli.js view dirName mode
// node mycli.js organize -/folderName
// node mycli.js help 

// let input = process.argv.slice(2);
// let cmd = input[0];
// switch(cmd) {
//     case "view":
//         console.log("view command executed");
//         break;
//      case "organize":
//          console.log("organize command implemented");
//          break;
//     case "help":
//         console.log(`List of all commands:
//                         1. view <dir-name> --tree
//                         2. view <dir-name> --flat
//                         3. organize <dir-name> /_
//                         4. help
//                         `);
//         break;
//     default:
//         console.log("Wrong command enter help to see list all the command");
// }
//-------------------------------------------------------
//console.log(input);
//--------------------------------------------------------

// function viewExecutor(){
//     console.log("view command executed");
// }

// function helpExecutor(){
//     console.log(`List of all commands:
//     1. view <dir-name> --tree
//     2. view <dir-name> --flat
//     3. organize <dir-name> /_
//     4. help
//     `);
// }

// function organizeExecutor(){
//     console.log("organize command implemented");
// }

let {helpFn} = require("./commands/help");
let {viewFn} = require("./commands/view");
let {organizeFn} = require("./commands/organize");
let input = process.argv.slice(2);
let cmd = input[0];
switch(cmd) {
    case "view":
        viewFn();
        break;
     case "organize":
         organizeFn();
         break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Wrong command enter help to see list all the command");
}