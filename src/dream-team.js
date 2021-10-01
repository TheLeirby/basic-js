import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  const  upperCaseDreamTeam = [];
  if (!Array.isArray(members)) {
    return false;
  } else {
    for (let i of members) {
      if (typeof(i) == 'string') {
        upperCaseDreamTeam.push(i.trim()[0].toUpperCase());
      }
      upperCaseDreamTeam.sort();
    }
    if (upperCaseDreamTeam !== []) {
      return upperCaseDreamTeam.join('');
    } else {
      return false;
    }
  }
}