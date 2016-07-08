babel --watch --source-maps inline --ignore "*.d.ts" --extensions ".js",".jsx" src --out-dir . --minified --compact --no-comments

node bundler-srv.js

tsc --watch --isolatedModules --pretty --skipDefaultLibCheck --listFiles --target es5 --moduleResolution node --module commonjs --inlineSourceMap --inlineSources --noResolve --jsx react --removeComments --strictNullChecks --experimentalDecorators --emitDecoratorMetadata --project . --outDir . --rootDir src


