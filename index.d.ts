declare namespace fileUrl {
	interface Options {
		/**
		Passing `false` will make it not call `path.resolve()` on the path.

		@default true
		*/
		readonly resolve?: boolean;
	}
}

/**
Convert a path to a file url.

@param path - File path to convert.
@returns The `path` converted to a file url.

@example
```
import fileUrl = require('file-url');

fileUrl('unicorn.jpg');
//=> 'file:///Users/sindresorhus/dev/file-url/unicorn.jpg'

fileUrl('/Users/pony/pics/unicorn.jpg');
//=> 'file:///Users/pony/pics/unicorn.jpg'

fileUrl('unicorn.jpg', {resolve: false});
//=> 'file:///unicorn.jpg'
```
*/
declare function fileUrl(path: string, options?: fileUrl.Options): string;

export = fileUrl;
