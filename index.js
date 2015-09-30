var express = require('express');
var app = express();
var url = require('url');
var bodyParser = require('body-parser')

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Jane",
    lastName: "Doe",
    emails: [
      {type: "home", address: "jane@doe.com"},
      {type: "work", address: "jdoe@megacorp.com"}
    ]
  },
  3: {
    firstName: "Bill",
    lastName: "Scott",
    emails: [
      {type: "home", address: "bill@scott.com"},
      {type: "work", address: "bscott@megacorp.com"}
    ]
  }
};

app.use(bodyParser());

app.post('/entry', function(req, res){

    var keysInEntries = Object.keys(entries);
    var keysInEntriesLength = keysInEntries.length;
    
    keysInEntriesLength++;
    
    entries[keysInEntriesLength] = {id: keysInEntriesLength, firstName: req.body.firstName, lastName: req.body.lastName};
    
    res.json(entries[keysInEntriesLength]);
    res.end();

}); 

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
