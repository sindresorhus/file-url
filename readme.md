# file-url [![Build Status](https://travis-ci.org/sindresorhus/file-url.svg?branch=master)](https://travis-ci.org/sindresorhus/file-url)

> Convert a path to a file url: `unicorn.jpg` ➔ `file:///Users/sindresorhus/unicorn.jpg`


## Install

```bash
$ npm install --save file-url
```


## Usage

```js
var fileUrl = require('file-url');

fileUrl('unicorn.jpg');
//=> file:///Users/sindresorhus/dev/file-url/unicorn.jpg

fileUrl('/Users/pony/pics/unicorn.jpg');
//=> file:///Users/pony/pics/unicorn.jpg
```


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global file-url
```

#### Usage

```bash
$ file-url --help

Usage
  $ file-url [path]

Example
  $ file-url
  file:///Users/sindresorhus/dev/file-url
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
