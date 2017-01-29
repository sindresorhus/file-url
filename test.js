import test from 'ava';
import m from './';

test('converts path to file url', t => {
	t.regex(m('test.jpg'), /file:\/\/\/.*\/test\.jpg/);

	if (process.platform === 'win32') {
		t.is(m('C:\\Users\\sindresorhus\\dev\\te^st.jpg'), 'file:///C:/Users/sindresorhus/dev/te%5Est.jpg');
	} else {
		t.is(m('/Users/sindresorhus/dev/te^st.jpg'), 'file:///Users/sindresorhus/dev/te%5Est.jpg');
	}
});

test('escapes reserved characters in path', t => {
	t.regex(m('Bad?/A#1.jpg'), /^file:\/\/\/.*\/Bad%3F\/A%231.jpg$/);
});

test('accepts resolve parameter', t => {
	t.is(m('test.jpg', {resolve: false}), 'file:///test.jpg');
});
