var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function Print () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
};

function Get (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
      	return err;
      }
      results[index] = data.toString()
      count++;

      if (count == 3)
        Print()
    }))
  })
};

for (var i = 0; i < 3; i++) {
  Get(i);
};


	


