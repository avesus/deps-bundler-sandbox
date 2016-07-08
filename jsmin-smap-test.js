var jsmin = require('jsmin-sourcemap'),
    fs = require('fs'),
    jquerySrc = fs.readFileSync('app-bundle.js', 'utf8');

// Process the jquery source via jsmin
var jqueryMinObj = jsmin({'code':jquerySrc,'src':'app-bundle.js','dest':'app-bundle.min.jsmin-smap.js'});


console.log(jqueryMinObj.code);
