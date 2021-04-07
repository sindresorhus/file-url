import {expectType} from 'tsd';
import fileUrl from './index.js';

expectType<string>(fileUrl('unicorn.jpg'));
expectType<string>(fileUrl('unicorn.jpg', {resolve: false}));
