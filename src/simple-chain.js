const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value = '()') {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isFinite(position) || position % 1 > 0 || Math.abs(position) > this.chain.length) {
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position, 1)
    return this
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.chain.join('~~'));
    this.chain = []
    return this.chain
  }
};

module.exports = {
  chainMaker
};
