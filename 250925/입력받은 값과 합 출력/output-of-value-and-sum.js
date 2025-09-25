const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0];
let b = input[1];

console.log(a+" "+b+" "+(Number(a)+Number(b)));
