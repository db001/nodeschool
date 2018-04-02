const filterMod = require('./module');

const filePath = process.argv[2];
const ext = process.argv[3];

filterMod(filePath, ext);