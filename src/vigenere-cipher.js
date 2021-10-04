import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(directly = true) {
    this.directly = directly;
    this.alphaToUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let x = 0;
    
    const keyInUp = key.toUpperCase().split("");
    const tempWord = str.toUpperCase().split("");

    let result = tempWord.map((anyWord) => {
      if (this.alphaToUpper.includes(anyWord)) {
        let i = (this.alphaToUpper.indexOf(anyWord) + this.alphaToUpper.indexOf(keyInUp[x])) % this.alphaToUpper.length;
        x = (x + 1) % keyInUp.length;
        return this.alphaToUpper[i];
      }
      return anyWord;
    });
    return this.directly ? result.join("") : result.reverse().join("");
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let x = 0;

    const keyInUp = key.toString().toUpperCase().split("");
    const tempWord = str.toString().toUpperCase().split("");

    let result = tempWord.map((anyWord) => {
       if (this.alphaToUpper.includes(anyWord)) {
        let i = this.alphaToUpper.indexOf(anyWord) - this.alphaToUpper.indexOf(keyInUp[x]);
        if (i < 0) i += this.alphaToUpper.length;
        x = (x + 1) % keyInUp.length;
        return this.alphaToUpper[i];
      }
      return anyWord;
    });
    return this.directly ? result.join("") : result.reverse().join("");
  }
  }
