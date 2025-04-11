const fs=require('fs')

fs.unlink("newFile.txt",(err)=>{
    if(err) console.log(err)
        else console.log("All Done !!!")
})