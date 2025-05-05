const express=require('express');
const app= express();
const PORT=4444;
const fs=require('fs')
const path=require('path')

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res)=>{
//     res.send("Welcome Praveen , this is Hero section Page");
// })
 
app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        console.log(files) 
    })
    res.render("index");
})

app.listen(PORT,()=>{
    console.log(`The Server start at ${PORT}`)
})