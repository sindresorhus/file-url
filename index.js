'use strict';
var path = require('path');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new Error('Expected a string');
	}

	var pathName = path.resolve(str).replace(/\\/g, '/');

	// Windows drive letter must be prefixed with a slash
	if (pathName[0] !== '/') {
		pathName = '/' + pathName;
	}

	return encodeURI('file://' + pathName);
};
