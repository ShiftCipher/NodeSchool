var fs = require('fs');

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString();

var lines = str.split('\n');

console.log(lines.length - 1);