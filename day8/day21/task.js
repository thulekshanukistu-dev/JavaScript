
function main() {
    let filename = "hello world.js";
    console.log("The extension of the file is " + findExtension(filename));
}
 main();
function findExtension(filename) {
   
    let parts = filename.split(".");
    let extension = parts; 
    return extension.pop();
}


