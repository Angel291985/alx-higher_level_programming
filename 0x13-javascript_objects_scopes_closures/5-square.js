#!/usr/bin/node
/*
 * The function includes modules
 * that exists in separate file (4-rectangle)
 * ========= Class Square ==================
 * Class square inherits from the Class Rectangle
 */
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}
module.exports = Square;
