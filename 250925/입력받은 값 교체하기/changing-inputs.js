const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0];
let b = input[1];
let tmp = a;

a = b;
b = tmp;
console.log(a + " " + b);