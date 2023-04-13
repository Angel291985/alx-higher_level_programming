#!/usr/bin/node
class Rectangle {
  constructor (h, w) {
    if (h > 0 && w > 0) {
      this.height = h;
      this.width = w;
    }
  }

  print () {
    for (let n = 0; n < this.height; n++) {
      let sequence = '';
      for (let m = 0; m < this.width; m++) {
        sequence += 'X';
      }
      console.log(sequence);
    }
  }
}
module.exports = Rectangle;
