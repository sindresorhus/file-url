'use strict';
const path = require('path');

module.exports = (str, opts) => {
	if (typeof str !== 'string') {
		throw new Error('Expected a string');
	}

	opts = Object.assign({resolve: true}, opts);

	let pathName = str;

	if (opts.resolve) {
		pathName = path.resolve(str);
	}

	pathName = pathName.replace(/\\/g, '/');

	// Windows drive letter must be prefixed with a slash
	if (pathName[0] !== '/') {
		pathName = `/${pathName}`;
	}

	return encodeURI(`file://${pathName}`);
};
