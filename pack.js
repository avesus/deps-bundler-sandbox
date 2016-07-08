var mdeps = require('module-deps');
var JSONStream = require('JSONStream');
var depsSort = require('deps-topo-sort')();

var md = mdeps();
md.pipe(depsSort).pipe(JSONStream.stringify()).pipe(process.stdout);
md.end({ file: __dirname + '/src.js' });


