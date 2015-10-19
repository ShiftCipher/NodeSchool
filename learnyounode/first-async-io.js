var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFile(file, function (err, data) {
	if (process.argv[2] != null) {
  		var lines = data.toString().split('\n').length - 1
  		console.log(lines);
	};
});

