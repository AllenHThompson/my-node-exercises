/*## Convert a file to Uppercase

Same as the previous program, using the fs.readFile to read the contents of the file. But this time print out the contents of the file in ALL CAPS. Example output:

$ node read-file-all-caps.js hello.txt
HELLO, WORLD!
$ node read-file-all-caps.js another-file.txt
SOME OTHER TEXT */

var fs = require('fs');

fs.readFile('tweet2.txt', function(err, buffer){
     if (err) {
          console.error('Stack:', err.stack);
          return;
     }

     console.log('Buffer:', buffer);

     var stringContent = buffer.toString();
     console.log('String content:', stringContent.toUpperCase());

});

console.log('This happened before the data was ready');
