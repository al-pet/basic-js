const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (!this.array) {
      this.array = [];
    }
    this.array.push(`( ${value === undefined ? "" : value} )`);
    return this;
  },
  removeLink(position) {
    if (this.array[position - 1] === undefined) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let res = this.array.join("~~");
    this.array = [];
    return res;
  },
};




module.exports = {
  chainMaker
};
