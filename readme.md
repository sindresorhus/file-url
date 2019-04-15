# file-url [![Build Status](https://travis-ci.org/sindresorhus/file-url.svg?branch=master)](https://travis-ci.org/sindresorhus/file-url)

> Convert a path to a file url: `unicorn.jpg` → `file:///Users/sindresorhus/unicorn.jpg`


## Install

```
$ npm install file-url
```


## Usage

```js
const fileUrl = require('file-url');

fileUrl('unicorn.jpg');
//=> 'file:///Users/sindresorhus/dev/file-url/unicorn.jpg'

fileUrl('/Users/pony/pics/unicorn.jpg');
//=> 'file:///Users/pony/pics/unicorn.jpg'

fileUrl('unicorn.jpg', {resolve: false});
//=> 'file:///unicorn.jpg'
```

## API

### fileUrl(path, [options])

Returns the `path` converted to a file url.

#### path

Type: `string`

File path to convert.

#### options

Type: `object`

##### resolve

Type: `boolean`<br>
Default: `true`

Passing `false` will make it not call `path.resolve()` on the path.


## Related

- [file-url-cli](https://github.com/sindresorhus/file-url-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
