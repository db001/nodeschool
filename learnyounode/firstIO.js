const fs = require('fs');

const path = process.argv[2];

var data = fs.readFileSync(path);

console.log(data.toString().split('\n').length - 1);