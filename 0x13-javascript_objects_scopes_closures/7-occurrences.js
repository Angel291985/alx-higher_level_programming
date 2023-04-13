#!/usr/bin/node
module.exports.nbOccurences = function (list, searchElement) {
  let counter = 0;
  for (let n = 0; n < list.length; n++) {
    if (searchElement === list[n]) {
      counter++;
    }
  }
  return counter;
};
