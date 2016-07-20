# Webpack Samples

This is for trying out WebPack.  Initially starting with the DLL Plugin.

## Setup
* npm install (root directory)
* alias wp=../node_modules/bin/webpack
* alias wps=../node_modules/bin/webpack-dev-server

## dll1 and dllRef
### build dll1
* cd dll1
* wp

### build dllRef
* cd dllRef
* wp -w (watch the source file)
* wps (start the web server)

### in the browser
* http://localhost:8080/webpack-dev-server/index.html  (watch URL, try changing dllRef/src/js/example.js) 
* http://localhost:8080/index.html

## dynRequire
* Trying out - http://stackoverflow.com/questions/35049806/dynamically-require-vendor-module-with-webpack

