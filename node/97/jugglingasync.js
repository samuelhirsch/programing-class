const http = require("http");
let files = [];

let count=0;

for (let i = 0; i < 3; i++){
    get(i)
}
function get(index) {
    http.get(process.argv[2+index],response);
    let file = "";
    function response(res) {

        res.setEncoding("utf-8");
        
        res.on('data', (data) => {
            file += data;
        });

        res.on("end", () => { files[index]=file;++count; endToRead() })
    }
}



function endToRead() {
    if (count=== 3) {
        for (let i = 0; i < files.length; i++) {
            console.log(files[i])
        }
    }
}