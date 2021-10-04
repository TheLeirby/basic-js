import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depthCalc = 1;
    let i = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        i = 1 + this.calculateDepth(i);
        if (i > depthCalc) {
          depthCalc = i;
        }
      }
    }
    i = 1;
    return depthCalc
    
  }
}
