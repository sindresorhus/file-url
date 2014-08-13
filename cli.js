#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var fileUrl = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    file-url [path]',
		'',
		'  Example',
		'    file-url',
		'    file:///Users/sindresorhus/dev/file-url'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

console.log(fileUrl(input || process.cwd()));
