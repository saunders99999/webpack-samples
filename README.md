# Webpack Samples

This is for trying out WebPack.  Initially starting with the DLL Plugin.

### Setup
* npm install (root directory)

### For convenience to run from subfolders
* alias wp=../node_modules/bin/webpack
* alias wps=../node_modules/bin/webpack-dev-server

### build dll1
* cd dll1
* wp

### build dllRef
* cd dllRef
* wp -w (watch the source file)
* wps (start the web server)

### in the browser
* http://localhost:8080/webpack-dev-server/index.html  (watch URL) 
* http://localhost:8080/index.html

