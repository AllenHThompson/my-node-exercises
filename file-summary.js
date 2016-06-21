var fs = require('fs');
//get filename from command line arguments

var filename = process.argv[2];
//read in the file
fs.readFile(filename, function(err, buffer){
     //convert buffer object to a stringContent
     var contents = buffer.toString();
})

var charCount = contents.length;

var lines = contents.split('\n');

console.log(lines);
