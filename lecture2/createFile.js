const fs=require('fs')

 
fs.writeFile("newFile.md","hey hello kaise ho, i'm fine ",function(err){
    if(err) console.log(err);
    else console.log("done")
})