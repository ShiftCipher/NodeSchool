var http = require ('http');
var url = process.argv[2];

http.get(url, function (res) {
	res.on("data", function (data) {
		console.log(data.toString());
	})
	res.on("error", console.error);
});

