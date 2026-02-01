let totel=0;
for(let i=2;i<process.argv.length;i++){
totel+=Number(process.argv[i]);
}
console.log(totel)