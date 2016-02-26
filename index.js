'use strict';
var path = require('path');

module.exports = function (str, options) {
	if (typeof str !== 'string') {
		throw new Error('Expected a string');
	}

	var pathName = str;

	if (typeof options !== 'object' || options.resolve) {
		pathName = path.resolve(str);
	}

	pathName = pathName.replace(/\\/g, '/');


	// Windows drive letter must be prefixed with a slash
	if (pathName[0] !== '/') {
		pathName = '/' + pathName;
	}

	return encodeURI('file://' + pathName);
};
