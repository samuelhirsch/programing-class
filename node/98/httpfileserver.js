const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    const file = fs.createReadStream(process.argv[3])
    file.pipe(res)
}).listen(process.argv[2])
