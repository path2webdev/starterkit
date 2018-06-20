var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
// for sending the request to the path and pick the html file
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

// For the app to listen by using the port we mentioned above and the loccalhost
app.listen(port,function(err){
  if(err){
    console.log(err);

  } else {
    open('http://localhost: ' + port);
  }
})
