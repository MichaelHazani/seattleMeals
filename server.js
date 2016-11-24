// require('newrelic');
// var request = require('request');
var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'dist')));
app.use('/lib', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/lib', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// app.get('/food', function(req, res) {
//   request('https://data.seattle.gov/resource/47rs-c243.json', function(err, res, body) {
// if (!err && res.statusCode == 200) {
//   console.log(body);
// }
  // });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("listening at " + PORT);
})
