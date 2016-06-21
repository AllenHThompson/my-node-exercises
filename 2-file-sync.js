var fs = require('fs');
var buffer = fs.readFileSync('data.txt');
console.log('Buffer:', buffer);
var stringContents = buffer.toString();
console.log('String contents:', stringContents);
