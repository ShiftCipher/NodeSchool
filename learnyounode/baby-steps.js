var total = 0;

for (var i = 2; i <= process.argv.length - 1; i++) {
	total = total + Number(process.argv[i]);
};

console.log(total);