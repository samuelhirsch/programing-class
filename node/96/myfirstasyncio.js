/*import fs from "fs/promises";*/
 /*const content=await fs.readFile(process.argv[2],"utf-8")
 const lines=content.split("\n").length-1
 console.log(lines)*/
 /*import fs from "fs";*/
 const fs = require('fs');
  fs.readFile(process.argv[2],"utf-8",(err,result)=>{
    if(err){
        return
    }
    else{
        console.log(result.split("\n").length-1)
    }
  })