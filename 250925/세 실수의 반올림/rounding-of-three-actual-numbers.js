const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let a = input[0].toFixed(3);
let b = input[1].toFixed(3);
let c = input[2].toFixed(3);

console.log(a);
console.log(b);
console.log(c);
