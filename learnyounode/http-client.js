var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function (res) {
	res.pipe(bl(function (err, data) {
		if (err) {
			return err;
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});
