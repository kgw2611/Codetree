const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8").trim());

if (n >= 3000) {
    console.log("book");
    } else if (n >= 1000) {
        console.log("mask");
        } else {
            console.log("no");
            }