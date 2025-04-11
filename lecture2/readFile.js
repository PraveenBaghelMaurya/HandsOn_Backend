const fs=require('fs')

fs.readFile("lecture2/copy/localcopy.md",'utf-8',(err,data)=>{
    if(err) console.log(err)
    else console.log(data.toString()," All Done !!!")
})