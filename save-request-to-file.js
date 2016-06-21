/*## Save request to a file

Extend the previous program to save the body of the response to a file. The name of the file will be taken in as the second command line argument. Example output:

$ node request.js http://hellohappy.org hellohappy.html

Now the file hellohappy.html should contain the HTML content of hellohappy.org.*/

var request = require('request');

var url = process.argv[2];

request(url, function(err, reponse, body){
     console.log(body);
});
