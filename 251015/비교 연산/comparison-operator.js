const fs = require('fs');

const [A, B] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const ans = [];
ans.push(A >= B ? 1 : 0);
ans.push(A >  B ? 1 : 0);
ans.push(B >= A ? 1 : 0);
ans.push(B >  A ? 1 : 0);
ans.push(A === B ? 1 : 0);
ans.push(A !== B ? 1 : 0);
console.log(ans.join('\n'));
