const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, (err, data) => {
    if(err) return err;
    let str = data.toString();
    console.log(str.split('\n').length - 1);
})