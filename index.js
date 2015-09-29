var express = require('express');
var app = express();
var url = require('url');

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
  },
  4: {
    firstName: "John",
    lastName: "Lavoie",
    emails: [
      {type: "home", address: "john@lavoie.com"},
      {type: "work", address: "jlavoie@megacorp.com"}
    ]
  },
  5: {
    firstName: "Samuel",
    lastName: "Doe",
    emails: [
      {type: "home", address: "samuel@doe.com"},
      {type: "work", address: "sdoe@megacorp.com"}
    ]
  },
  6: {
    firstName: "Dominic",
    lastName: "Doe",
    emails: [
      {type: "home", address: "dominic@doe.com"},
      {type: "work", address: "ddoe@megacorp.com"}
    ]
  }
};

app.get('/entry/search', function (req, res) {
  
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var firstName = query.firstName;
  var lastName = query.lastName;
  var email = query.email;
  var keysInEntries = Object.keys(entries);
  var resultsFound = [];
  
  for(var i = 1 ; i <= keysInEntries.length ; i++){
    
    if(firstName === entries[i].firstName || lastName === entries[i].lastName || email === entries[i].emails[0].address || email === entries[i].emails[1].address){
      
      resultsFound.push(entries[i].lastName+", "+entries[i].firstName+" | Email 1: "+entries[i].emails[0].address+" ("+entries[i].emails[0].type+") | Email 2: "+entries[i].emails[1].address+" ("+entries[i].emails[1].type+")");
    } 
  }
  
  if(!resultsFound){
    res.send("Error: No entry found.");
  } else {
    res.json(resultsFound);
  }
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
