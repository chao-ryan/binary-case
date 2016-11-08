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

/**
 * Toggle the case of a string based on the number value passed in.
 * @param {string} string
 * @param {number} number
 * @param {object} [options={allowOverflow: true}]
 * @returns {string|boolean}
 */
module.exports = binaryCase;

function binaryCase(string, number, options) {
    const binary = (number >>> 0).toString(2);

    if (!options || typeof options !== 'object') options = {};
    if (!options.hasOwnProperty('allowOverflow')) options.allowOverflow = true;

    if (binary.length > string.match(/[a-z]/ig).length && !options.allowOverflow) return false;

    var bin;
    var ch;
    var i;
    var j = binary.length - 1;
    var offset;
    var result = '';
    for (i = 0; i < string.length; i++) {
        ch = string.charAt(i);
        if (/[a-z]/ig.test(ch)) {
            bin = binary.charAt(j--);

            if (bin === '1') {
                offset = ch >= 'a' && ch <= 'z' ? -32 : 32;
                result += String.fromCharCode(ch.charCodeAt(0) + offset);
            } else {
                result += ch;
            }

            if (j < 0) {
                result += string.substr(i + 1);
                break;
            }
        } else {
            result += ch;
        }
    }
    return result;
}

/**
 * Get the maximum number that can be used before causing overflow.
 * @param {string} string
 * @returns {number}
 */
binaryCase.maxNumber = function(string) {
    const pow = string.match(/[a-z]/ig).length;
    return Math.pow(2, pow) - 1;
};

/**
 * Get an array of all possible variations.
 * @param {string} string
 * @returns {string[]}
 */
binaryCase.variations = function(string) {
    const results = [];
    const max = binaryCase.maxNumber(string);
    for (var i = 0; i <= max; i++) {
        results.push(binaryCase(string, i));
    }
    return results;
};