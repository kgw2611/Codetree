const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

console.log(num.toFixed(2));