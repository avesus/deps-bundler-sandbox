var argv = require('optimist').argv;

if (!argv.entry) {
  console.log('usage: bla --entry index.js');
  process.exit(0);
}

var entryPath = process.cwd() + '/' + argv.entry;

var path = require('path');
var combineSourceMap = require('combine-source-map');

var fs = require('fs');

var source = fs.readFileSync(entryPath, 'utf-8');

var sourceMap = combineSourceMap.create();
sourceMap.addFile(
  { sourceFile: entryPath, source: source },
  { line: 0 }
);


fs.writeFileSync('./index.html', '<html><head><script>' + source + '\n' + sourceMap.comment() + '</script></head><body></body></html>', 'utf-8');

