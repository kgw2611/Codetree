const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim(); // 입력값 읽기
const N = Number(input);

if (N >= 80) {
  console.log("pass");
} else {
  console.log(`${80 - N} more score`);
}
