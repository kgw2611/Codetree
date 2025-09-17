const fs = require("fs");
let num = fs.readFileSync(0).toString().trim();

console.log(Number(num)+2);