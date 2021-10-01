import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.toTimeString();
  } catch (error) {
    throw new Error('Invalid date!');
  } 

  let numberOfMonth = date.getMonth();
  let messageOfMonth = '';
   if(numberOfMonth == 0 || numberOfMonth == 1 || numberOfMonth == 11) {
    messageOfMonth = 'winter';
  } else if(numberOfMonth >= 2 &&  numberOfMonth <= 4) {
    messageOfMonth = 'spring';
  }
  else if(numberOfMonth >= 5 &&  numberOfMonth <= 7) {
    messageOfMonth = 'summer';
  }
  else if(numberOfMonth >= 8 &&  numberOfMonth <= 10) {
    messageOfMonth = 'autumn';
  }
  return messageOfMonth;
}