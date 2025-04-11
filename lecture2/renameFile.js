const fs=require('fs')

fs.rename("newFile.md","TestFile.md",(err)=>{
    if(err) console.log(err)
    else console.log("All Done !!!")
})