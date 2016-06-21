/*## Reading a File (Async)

Write the same program as the previous exercise. Except this time do it using the asynchronous API: fs.readFile(): https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback*/

var fs = require('fs');

fs.readFile('tweet2.txt', function(err, buffer){
     if (err) {
          console.error('Stack:', err.stack);
          return;
     }

     console.log('Buffer:', buffer);

     var stringContent = buffer.toString();
     console.log('String content:', stringContent);

});

console.log('This happened before the data was ready');
