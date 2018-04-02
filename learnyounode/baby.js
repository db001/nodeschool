const args = process.argv.slice(2);
console.log(args.reduce((a, b) => {
    return parseInt(a) + parseInt(b)
}));