'use strict';
var assert = require('assert');
var fileUrl = require('./');

it('should convert path to file url', function () {
	assert(/file:\/\/\/.*\/test\.jpg/.test(fileUrl('test.jpg')));
	if (process.platform === 'win32') {
		assert.strictEqual(fileUrl('C:\\Users\\sindresorhus\\dev\\te^st.jpg'), 'file:///C:/Users/sindresorhus/dev/te%5Est.jpg');
	} else {
		assert.strictEqual(fileUrl('/Users/sindresorhus/dev/te^st.jpg'), 'file:///Users/sindresorhus/dev/te%5Est.jpg');
	}
});

it('should accept resolve parameter', function () {
	assert.strictEqual(fileUrl('test.jpg', {resolve: false}), 'file:///test.jpg');
});
