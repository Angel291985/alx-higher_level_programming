#!/usr/bin/node
/*
 * Class Square defines a square and inherits
 * from Square of 5-square.js
 */
const Rectangle = require('./4-rectangle');
module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    for (let n = 0; n < this.width; n++) {
      if (c === undefined) {
        console.log('X'.repeat(this.width));
      } else {
        console.log(c.repeat(this.width));
      }
    }
  }
};
