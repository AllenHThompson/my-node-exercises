var request = require('request');

var city = process.argv[2];

function getWeather(city, callback) {
request({
     url: "http://api.openweathermap.org/data/2.5/weather",
     qs: {
          q: city,
          units: 'imperial',
          APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
     }
}, function(err, respoonse, body) {
     if (err) {
          callback(err);
          return;
     }

     var data = JSON.parse(body);

     callback(null, data);
     });
}

getWeather('Atlanta, GA', function(err, data){
     if (err) {
          console.error(err.msessage);
          return;
     }
     console.log(data.name);
     console.log("Weather: " + data.weather[0].description);
     console.log("Temperature: " + data.main.temp);

});

/*
getWeather function

Inputs:
*city - name of city
*callback - continuation to be called when data arrives. Inputs:
     * err - null if success, error object if nodeProgramPath
     *data - weather data

*/
