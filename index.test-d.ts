import {expectType} from 'tsd';
import fileUrl = require('.');

expectType<string>(fileUrl('unicorn.jpg'));
expectType<string>(fileUrl('unicorn.jpg', {resolve: false}));
