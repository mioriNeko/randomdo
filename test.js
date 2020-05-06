'use strict';
const randomdo = require('./index.js');
const assert = require('assert');

randomdo.todo('体操する');
randomdo.todo('プログラミングの勉強をする');
assert.deepEqual(randomdo.list(), ['体操する','プログラミングの勉強をする']);

console.log('テストが正常に完了しました');
