#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
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
