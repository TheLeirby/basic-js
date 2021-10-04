import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
   if (options.additionSeparator === undefined) {
     options.additionSeparator = "|";
   }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  str = String(str);

  let addition = String(options.addition);
  if (options.addition === undefined) {
    addition = "";
  }
  let addElse = addition;
  let string = str;

  let newArr='';

  if (1< options.additionRepeatTimes) {    
    for (let i = 0; i < options.additionRepeatTimes - 1; i++){
      addElse = addElse + options.additionSeparator + addition;
      newArr=newArr+' | '+addElse;
    }
  }
  newArr=newArr+'~~';
  if (1 < options.repeatTimes) {
    string = string + addElse;
    for (let y = 0; y < options.repeatTimes - 1; y++) {
      string = string+options.separator + str + addElse;
      newArr=newArr+ ' || '+string;
    }
  } else {
    string = string + addElse;
  }

  return string;
}
