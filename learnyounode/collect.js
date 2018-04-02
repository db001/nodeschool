const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (res) => {
    res.on('error', (err) => console.error(err));
    res.pipe(bl(function (err, data) {
        const text = data.toString();
        console.log(text.length);
        console.log(text);
    }))
});