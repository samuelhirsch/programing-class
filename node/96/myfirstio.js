//import fs from "fs"
const fs = require('fs');
const content=fs.readFileSync(process.argv[2],"utf-8")

const split=content.split("\n")
console.log(split.length-1)
