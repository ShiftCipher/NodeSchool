var mymodule = require('./mymodule.js');
var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function (err, res) {
	if (err) {
		return console.error("Error: ", err)
	}
	res.forEach(function (file) {
		console.log(file);
	})
});