const http =require("http");
http.get(process.argv[2],response);
let file="";
let characters=0;
function response(res){
    //res.setEncoding("utf-8");
    res.on('data', (data)=>{file+=data.toString(); characters+=data.toString().length})
    res.on("end",()=>{console.log(characters);console.log(file)})
}
