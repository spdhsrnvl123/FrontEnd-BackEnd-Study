const os = require("os");

let position = os.type().toLocaleLowerCase().indexOf("darwin")
if(position >=0){
    console.log("Darwin이다")
}else{
    console.log("Darwin아님")
}