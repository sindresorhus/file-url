'use strict';
var assert = require('assert');
var fileUrl = require('./');

it('should convert path to file url', function () {
	assert(/file:\/\/\/.*\/test\.jpg/.test(fileUrl('test.jpg')));
});

it('should accept resolve parameter', function () {
	assert.strictEqual(fileUrl('test.jpg', {resolve: false}), 'file:///test.jpg');
});
