var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function (req, res) {
	var data = fs.createReadStream(file);
	data.on('data', function (data) {
    	res.end(data)
	});
});

server.listen(port);

