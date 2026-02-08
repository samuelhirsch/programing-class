const mymodule = require('./mymodule.js');
mymodule(process.argv[2],process.argv[3],handleFs);

function handleFs(error,files){
  if(error){
    console.error("somthing went wrong")
  }
  else{
    files.forEach(f => {
        console.log(f);
    });
  }
}