const http =require("http");
http.get(process.argv[2],response);
function response(res){
    res.on('data', (data)=>{console.log(data.toString())})
}