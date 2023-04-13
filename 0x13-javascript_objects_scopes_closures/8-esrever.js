#!/usr/bin/node
module.exports.esrever = function (list) {
  const listRev = [];
  const len = list.length;
  for (let n = 0; n < len; n++) {
    listRev.push(list.pop());
  }
  return listRev;
};
