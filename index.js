var express = require('express');
var app = express();

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




app.get('/entry/:entryId', function (req, res) {
  
  var entryId = req.params.entryId;
  
  if(entries[entryId]){
    res.json(entries[entryId]);
  } else {
    res.status(400).send('Bad request: Id selected unavailable.')
  }
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
