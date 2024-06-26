export interface Options {
	/**
	Passing `false` will make it not call `path.resolve()` on the path.

	@default true
	*/
	readonly resolve?: boolean;
}

/**
Convert a file path to a file URL.

@param filePath - The file path to convert.
@returns The `filePath` converted to a file URL.

@example
```
import fileUrl from 'file-url';

fileUrl('unicorn.jpg');
//=> 'file:///Users/sindresorhus/dev/file-url/unicorn.jpg'

fileUrl('/Users/pony/pics/unicorn.jpg');
//=> 'file:///Users/pony/pics/unicorn.jpg'

fileUrl('unicorn.jpg', {resolve: false});
//=> 'file:///unicorn.jpg'
```
*/
export default function fileUrl(filePath: string, options?: Options): string;
