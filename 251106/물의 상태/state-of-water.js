// 입력 받기 (예: Node.js 환경)
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim(); 
const n = parseInt(input);

// 조건문으로 상태 판별
if (n < 0) {
  console.log("ice");
  } 
else if (n >= 100) {
    console.log("vapor");
    }
else {
    console.log("water");
}