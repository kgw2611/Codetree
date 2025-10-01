const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log((A+B) + " " + ((A+B)/2));