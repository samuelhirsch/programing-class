const http = require('http')

http.createServer(function (req, res) {
    if (req.method === "POST") {
        let body = ""
        req.on("data", chunk => {
            body +=chunk.toString().toUpperCase()
        })
        req.on("end",()=>{
            res.write(body)
            res.end()
        })
    }

}).listen(process.argv[2])
