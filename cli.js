#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var fileUrl = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ file-url [path]');
	console.log('');
	console.log('Example');
	console.log('  $ file-url');
	console.log('  file:///Users/sindresorhus/dev/file-url');
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

console.log(fileUrl(input || process.cwd()));
