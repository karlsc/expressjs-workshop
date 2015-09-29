var express = require('express');
var app = express();



app.get('/op/:operation/:number1/:number2', function (req, res) {
  
  var operation = req.params.operation;
  var number1 = Number(req.params.number1);
  var number2 = Number(req.params.number2);
  var solution;
  
  switch(operation){
    
    case "add":
      solution = number1+number2;
      break;
    case "sub":
      solution = number1-number2;
      break;
    case "mult":
      solution = number1*number2;
      break;
    case "div":
      solution = number1/number2;
      break;
    default:
        res.status(400).send("Bad request: Wrong operator selected.");
  }
  
  var calculation = { operator: operation,
                      firstOperand: number1,
                      secondOperand: number2,
                      solution: solution
  };
  
  res.json(calculation);
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
