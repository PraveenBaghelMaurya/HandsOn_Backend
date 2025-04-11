const express = require("express")
const app = express();


function appUseWala(req,res,next){
    console.log("This is middleware");
    next();
  }
  //you can't write res.send in app.use because  

//   agar aap ek baar response bhej dete ho, toh phir next() call karne ka koi matlab nahi hota. Ek request ka sirf ek hi response ho sakta hai, warna "Cannot set headers after they are sent" error aa jayega. 😊

// 🚀 Express.js me document.write() kaam nahi karega, uski jagah res.send() use karo!
// Agar frontend me use karna ho toh sirf <script> tag ke andar hi karo. 😊


app.use(appUseWala) // other way to write

app.get("/", (req, res, next) => {
 return next(new Error("Something went Wrong"))//print console
});
app.get("/profile", (req, res) => {
  console.log(err.stack)
  req.statusCode(500).send('Something broke!')//print on frontend bcz it is response
});

app.listen(3000)
// const PORT=3000;
