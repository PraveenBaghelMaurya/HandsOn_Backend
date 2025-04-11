const fs=require('fs')

fs.copyFile("TestFile.md","lecture2/copy/localcopy.md",(err)=>{
    if(err)  console.log(err)
    else console.log("All Done !!!")
})