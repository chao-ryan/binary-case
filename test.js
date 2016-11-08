/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';
const binaryCase    = require('./index');
const test          = require('tape');

test('binary-case', function(t) {
    const noOverflow = { allowOverflow: false };
    
    t.equal(binaryCase('abc', 0), 'abc', 'no change');
    t.equal(binaryCase('abc', 1), 'Abc', 'first char');
    t.equal(binaryCase('abc', 2), 'aBc', 'second char');
    t.equal(binaryCase('abc', 3), 'ABc', 'first and second char');
    t.equal(binaryCase('abc', 4), 'abC', 'third char');
    t.equal(binaryCase('abc', 5), 'AbC', 'first and third char');
    t.equal(binaryCase('abc', 6), 'aBC', 'second and third char');
    t.equal(binaryCase('abc', 7), 'ABC', 'all chars');
    t.equal(binaryCase('abc', 8), binaryCase('abc', 0), 'duplicate');
    t.equal(binaryCase('abc', 8, noOverflow), false, 'unable to modify');

    t.equal(binaryCase('a-bc', 0), 'a-bc', 'no change');
    t.equal(binaryCase('a-bc', 1), 'A-bc', 'first char');
    t.equal(binaryCase('a-bc', 2), 'a-Bc', 'second char');
    t.equal(binaryCase('a-bc', 3), 'A-Bc', 'first and second char');
    t.equal(binaryCase('a-bc', 4), 'a-bC', 'third char');
    t.equal(binaryCase('a-bc', 5), 'A-bC', 'first and third char');
    t.equal(binaryCase('a-bc', 6), 'a-BC', 'second and third char');
    t.equal(binaryCase('a-bc', 7), 'A-BC', 'all chars');
    t.equal(binaryCase('a-bc', 8), binaryCase('a-bc', 0), 'duplicate');
    t.equal(binaryCase('a-bc', 8, noOverflow), false, 'unable to modify');

    t.equal(binaryCase('a bc', 0), 'a bc', 'no change');
    t.equal(binaryCase('a bc', 1), 'A bc', 'first char');
    t.equal(binaryCase('a bc', 2), 'a Bc', 'second char');
    t.equal(binaryCase('a bc', 3), 'A Bc', 'first and second char');
    t.equal(binaryCase('a bc', 4), 'a bC', 'third char');
    t.equal(binaryCase('a bc', 5), 'A bC', 'first and third char');
    t.equal(binaryCase('a bc', 6), 'a BC', 'second and third char');
    t.equal(binaryCase('a bc', 7), 'A BC', 'all chars');
    t.equal(binaryCase('a bc', 8), binaryCase('a bc', 0), 'duplicate');
    t.equal(binaryCase('a bc', 8, noOverflow), false, 'unable to modify');

    t.equal(binaryCase('a 123bc', 0), 'a 123bc', 'no change');
    t.equal(binaryCase('a 123bc', 1), 'A 123bc', 'first char');
    t.equal(binaryCase('a 123bc', 2), 'a 123Bc', 'second char');
    t.equal(binaryCase('a 123bc', 3), 'A 123Bc', 'first and second char');
    t.equal(binaryCase('a 123bc', 4), 'a 123bC', 'third char');
    t.equal(binaryCase('a 123bc', 5), 'A 123bC', 'first and third char');
    t.equal(binaryCase('a 123bc', 6), 'a 123BC', 'second and third char');
    t.equal(binaryCase('a 123bc', 7), 'A 123BC', 'all chars');
    t.equal(binaryCase('a 123bc', 8), binaryCase('a 123bc', 0), 'duplicate');
    t.equal(binaryCase('a 123bc', 8, noOverflow), false, 'unable to modify');
    
    t.equal(binaryCase.maxNumber('abc'), 7, 'max number');
    t.equal(binaryCase.maxNumber('a-bc'), 7, 'max number dash');
    t.equal(binaryCase.maxNumber('a bc'), 7, 'max number space');
    t.equal(binaryCase.maxNumber('a 123bc'), 7, 'max number space and numbers');

    const variations = binaryCase.variations('abc');
    t.equal(variations.length, 8, 'number of variations');
    t.equal(variations[0], 'abc', 'no change');
    t.equal(variations[1], 'Abc', 'first char');
    t.equal(variations[2], 'aBc', 'second char');
    t.equal(variations[3], 'ABc', 'first and second char');
    t.equal(variations[4], 'abC', 'third char');
    t.equal(variations[5], 'AbC', 'first and third char');
    t.equal(variations[6], 'aBC', 'second and third char');
    t.equal(variations[7], 'ABC', 'all chars');
    
    t.end();
});