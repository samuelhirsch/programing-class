const fs= require ("fs")
module.exports = function fsHandler(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            callback(err)
        }
        else {
            const filterdlist = list.filter(file => {
                if (file.endsWith(`.${ext}`)) {
                    return true;
                }
            })
            callback(null, filterdlist)
        }
    }
    )
}