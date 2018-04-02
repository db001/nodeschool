const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, (err, data) => {
    if(err) return err;
    data.map(ele => {
        if(path.extname(ele) === `.${ext}`) {
            console.log(ele);
        }
    });
})

