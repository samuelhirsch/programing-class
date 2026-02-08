const http = require('http');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
};
function unixtime(time) {
    return { unixtime: time.getTime() }
};
http.createServer(function (req, res) {

    const url = new URL(req.url, 'http://example.com');
    const time = new Date(url.searchParams.get('iso'));
    let result
    if (url.pathname === '/api/parsetime') {
        result = parsetime(time);
    } else if (url.pathname === '/api/unixtime') {
        result = unixtime(time);
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(process.argv[2]);