var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var ext = "." + process.argv[3];

var files = fs.readdir(file, function (err, list) {
	list.forEach(function(file) {
		if (path.extname(file) == ext) {
			console.log(file);
		};
	})
})

