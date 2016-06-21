/*## Convert a file to Uppercase (2)

Like the previous problem, but this write out the uppercased version to the same file - overwriting it.*/
var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function(err, buffer){
     if (err) {
          console.error('Stack:', err.stack);
          return;
     }

     var stringContent = buffer.toString();
     console.log('String content:', stringContent.toUpperCase());


     // console.log('Buffer:', buffer);

});
var text = stringContent.toUpperCase();
fs.writeFile(filename, text, function(err) {

     // check for error
     if (err) {
          console.error(err.stack);
          return;
     }
     // print message saying the file was overwritten
     console.log('Wrote', filename);
});
