const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
  console.log(a * b);
} else {
  console.log(Math.floor(b / a));
}
