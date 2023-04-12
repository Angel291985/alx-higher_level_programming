#!/usr/bin/node
let nextMax = 0;
const Args = process.argv.slice(2);
if (Args.length > 1) {
  Args.sort();
  nextMax = Args[Args.length - 2];
}
console.log(nextMax);
