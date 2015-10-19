var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, res) {

	ext = "." + ext;
	fs.readdir(dir, function (err, list) {
		if (err) {
			return res(err);
		}
		list = list.filter(function (file) {
			return path.extname(file) == ext
		})
		
		return res(null, list);
	})
};