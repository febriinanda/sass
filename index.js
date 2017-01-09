var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

// Register static files here
// -- Example: app.use("/semantic",express.static(__dirname + "/semantic"));

app.use("/public",express.static(__dirname + "/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/page2', function(req, res){
  res.sendFile(__dirname + '/page2.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
