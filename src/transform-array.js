import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");}

 const arrTransform = [];

 for(let i = 0; i < arr.length; i++) {
    let j=arrTransform.length;   
    switch(arr[i]) {
      case '--double-next':
          if (i + 1 < arr.length) {            
            arrTransform.splice(j, 0, arr[i+1]);
          }
          break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {          
          arrTransform.splice(j, 0, arr[i-1]);
        }
        break;
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next') {                 
          arrTransform.splice(j-1, 1);
        }
        break;
      default:        
        arrTransform.splice(j, 0, arr[i]);
        break;     
    } 
    
 }
 return arrTransform;
}
