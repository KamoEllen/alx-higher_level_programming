#!/usr/bin/node
const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add (a, b) {
  console.log(Number(a) + Number(b));
}

add(arg1, arg2);
