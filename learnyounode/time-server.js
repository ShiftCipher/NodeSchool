var net = require('net');
var port = Number(process.argv[2]);

function clock () {
	date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hours = date.getHours();
	minutes = date.getMinutes();
	if (month < 10) {
		month = "0" + month;
	};
	if (day < 10) {
		day = "0" + day;
	};
	if (hours < 10) {
		hours = "0" + hours;
	};
	data = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
	return data;
}

var server = net.createServer(function (socket) {
	socket.end(clock() + "\n");
});

server.listen(port);