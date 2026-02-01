const fs = require('fs');
fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        return console.error(err)
    }
    else {
        const filterdArray = list.filter(file => {
            if (file.endsWith(`.${process.argv[3]}`)) {
                return true;
            }
        })
        filterdArray.forEach((file) => {
            console.log(file)
        })
    }
}
)
/*import fs from "fs/promises"
try {
    const folder = await fs.readdir(process.argv[2]);
    folder.forEach((file) => {
        if (file.endsWith(`.${process.argv[3]}`)){
            console.log(file)
        }

    })

} catch (error) {
    console.log(error,"ll")
}*/