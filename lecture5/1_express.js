const express = require("express")
const app = express();

app.use(express.json);//JSON data parse karne ke liye
app.use(express.urlencoded({extended:true}))//Form data parse karne ke liye

app.use((req,res,next)=>{
  console.log("This is middleware");
  next();
})
app.get("/", (req, res) => {
  res.send("Hello world ,I 'm Praveen baghel maurya, Good morning bhai");
});
app.get("/profile", (req, res) => {
  res.send("Hello world ,I 'm Praveen,this is Profile of usere ");
});

app.listen(3000)
// const PORT=3000;
