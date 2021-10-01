import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainMaker: [],
  getLength() {
    return this.chainMaker.length;
  },
  addLink(value) {
    if (arguments.length < 1) {
      this.chainMaker.push('( )')
    } else {
      this.chainMaker.push(value)
    }
    return this
  },
  removeLink(position) {
    const pos = position - 1;
    if(typeof position !== 'number' || position >= this.chainMaker.length || pos < 0) {
      this.chainMaker.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chainMaker .splice(pos, 1);
      return this;
    }
  },
  reverseChain() {
    if(!this.chainMaker ) this.chainMaker  = [];
    this.chainMaker  = this.chainMaker.reverse();
    return this;
  },
  finishChain() {
    let  value = this.chainMaker.map(n => `( ${n} )`).join('~~');
    this.chainMaker.length = 0;
    return value;
  }
};