#!/usr/bin/node
class Rectangle {
  constructor (h, w) {
    if (h >= 1 && w >= 1) {
      // initializing the instance
      this.height = h;
      this.width = w;
    }
  }

  /*
* Method to print the rectangle using the character X
*/
  print () {
    const character = 'X';
    for (let n = 0; n < this.height; n++) {
      console.log(character.repeat(this.width));
    }
  }

  /*
* method rotate exchanges the width and height of the rectangle
*/
  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  /*
 * method double multiples the width and height of the rectangle
 * by 2
*/
  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
