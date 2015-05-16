#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fileUrl = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ file-url [path]',
		'',
		'Example',
		'  $ file-url',
		'  file:///Users/sindresorhus/dev/file-url'
	].join('\n')
});

console.log(fileUrl(cli.input[0] || process.cwd()));
