#!/usr/bin/node
/*
  ========= Class Square ==================
  * A Class square that defines a square and inherits from previous rectangle
*/
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
