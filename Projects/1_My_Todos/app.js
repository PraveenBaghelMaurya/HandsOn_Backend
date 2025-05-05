const express = require('express');
const app = express();
const path=require('path');
const PORT = 3000;
const mongoDB=require('./database/db')
const UserRouter=require('./routes/user.routes')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))



mongoDB().then(()=>{
    console.log("MongoDB connect sucessfully")

    
    // Start server
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:`+PORT);
    });
    // Routes
    app.use('/user',UserRouter);

})
