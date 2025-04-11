const fs=require('fs')

fs.appendFile("newFile.md","Bhai maza hi aa gaya",(err)=>{
    if(err) console.log(err)
    else console.log("All Done !!!")

})