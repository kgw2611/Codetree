const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = parseFloat(input[0]);
let B = parseFloat(input[1]);

console.log((A+B) + " " + ((A+B)/2).toFixed(1));