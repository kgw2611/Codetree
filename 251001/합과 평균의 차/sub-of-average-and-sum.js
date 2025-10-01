const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

console.log(A+B+C);
console.log((A+B+C)/3);
console.log((A+B+C)-(A+B+C)/3);