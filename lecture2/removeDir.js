//remove directory either it is empty or contain file
const fs=require('fs')

fs.rm("lecture2/copy2",{recursive:true},(err)=>{
    if(err) console.log(err)
    else console.log("All Done !!!")
})

