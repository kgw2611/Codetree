const fs = require("fs");
let score = fs.readFileSync(0).toString().trim();

console.log("Your score is",score,"point.");