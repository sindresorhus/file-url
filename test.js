import test from 'ava';
import fileUrl from './index.js';

test('converts path to file url', t => {
	t.regex(fileUrl('test.jpg'), /file:\/{3}.*\/test\.jpg/);

	if (process.platform === 'win32') {
		t.is(fileUrl('C:\\Users\\sindresorhus\\dev\\te^st.jpg'), 'file:///C:/Users/sindresorhus/dev/te%5Est.jpg');
	} else {
		t.is(fileUrl('/Users/sindresorhus/dev/te^st.jpg'), 'file:///Users/sindresorhus/dev/te%5Est.jpg');
	}
});

test('escapes reserved characters in path', t => {
	t.regex(fileUrl('Bad?/A#1.jpg'), /^file:\/{3}.*\/Bad%3F\/A%231\.jpg$/);
});

test('accepts resolve parameter', t => {
	t.is(fileUrl('test.jpg', {resolve: false}), 'file:///test.jpg');
});
