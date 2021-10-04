import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const str = s2.split('');
  let number = 0;
  for (let i = 0; i < s1.split('').length; i++) {
    if (str.indexOf(s1.split('')[i]) !== -1) {
      delete str[str.indexOf(s1.split('')[i])];
      number++;
    }
  }
  return number;
}
