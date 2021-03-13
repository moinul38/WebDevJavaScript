let root={
    name:"d10",
    children:[{
        name:"d20",
        children:[{
            name:"d50",
            children:[]
        },{
            name:"d60",
            children:[]
        }]
    },{
        name:"d30",
        children:[{
            name:"d70",
            children:[]
        },{
            name:"d80",
            children:[{
                name:"d110",
                children:[]
            }]
        },{
            name:"d90",
            children:[]
        }]
    },{
        name:"d40",
        children:[]
    }]
}

function printgTree(node){
    let meNmyFamily = node.name+" -> ";
    for(let i=0; i< node.children.length; i++){
        meNmyFamily += node.children[i].name + ", ";
    }
    console.log(meNmyFamily);
//full tree print
//faith
    for(let i = 0; i < node.children.length; i++){
        printgTree(node.children[i]);
    }
}
//printgTree(root);
//---------------------------------------
// printgTree(root.children[0]);
// printgTree(root.children[1]);
// printgTree(root.children[2]);
//------------------------------------

printgTree("d10","");