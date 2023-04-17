const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(boolean) {
    this.set = [];
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      this.set.push(String.fromCharCode(i))
    }
    this.reverse = boolean;
  }
  encrypt(string, key) {
    if (string && key) {
      string = string.split("");
      key = key.split("");
      let keyCount = 0;
      let reg = /[A-Za-z]/;
      for (let i = 0; i < string.length; i++) {
        if (reg.test(string[i])) {
          string[i] =
            this.set[
              (this.set.indexOf(string[i].toLowerCase()) +
                this.set.indexOf(
                  key[keyCount % key.length].toLowerCase()
                )) %
              26
            ].toUpperCase();
          keyCount++;
        }
      }
      if (this.reverse === false) {
        return string.reverse().join("");
      }
      return string.join("");
    }
    throw new Error("Incorrect arguments!");
  }

  decrypt(string, key) {
    if (string && key) {
      string = string.split("");
      key = key.split("");
      let keyCount = 0;
      let reg = /[A-Za-z]/;
      for (let i = 0; i < string.length; i++) {
        if (reg.test(string[i])) {
          let num =
            (this.set.indexOf(string[i].toLowerCase()) -
              this.set.indexOf(
                key[keyCount % key.length].toLowerCase()
              )) %
            26;
          num < 0 ? (num += 26) : num;
          string[i] = this.set[num].toUpperCase();
          keyCount++;
        }
      }
      if (this.reverse === false) {
        return string.reverse().join("");
      }
      return string.join("");
    }
    throw new Error("Incorrect arguments!");
  }
}

module.exports = {
  VigenereCipheringMachine
};
