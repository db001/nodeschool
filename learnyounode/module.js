const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb) {

    let files = [];
    
    fs.readdir(dir, (err, data) => {
        if(err) return cb(err, null);
        data.map(ele => {
            if(path.extname(ele) === `.${ext}`) {
                console.log(ele);
                files.push(ele);
            }
        });
        return cb(null, files);
    })
}