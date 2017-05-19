const fs = require('fs')
  , p = require('path')
  ;

const recursiveReaddirSync = path =>
    fs.readdirSync(path)
        .map(file => p.join(path, file))
	.reduce((oldValue, file) => (oldValue.concat(fs.lstatSync(file).isDirectory() ? recursiveReaddirSync(file) : file)), []);

module.exports = recursiveReaddirSync;
