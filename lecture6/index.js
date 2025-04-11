const express = require('express') // Import Express framework
const app = express(); // Create an Express app

const path = require('path') // Import Path module to handle file and folder paths

app.use(express.json()); // Allows the app to read JSON data from requests
app.use(express.urlencoded({ extended: true })) // Allows the app to read form data (URL-encoded)
app.use(express.static(path.join(__dirname, 'public'))) // Serve static files like CSS, JS, images from 'public' folder

app.set('view engine', 'ejs') // Set EJS as the template engine for dynamic HTML pages

app.get("/", (req, res) => { // When user visits "/", render the "index.ejs" file
    res.render("index") 
})
app.get("/profile/:username/:age", (req, res) => { 
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`)
})


app.listen(3000, () => { // Start the server on port 3000 and log a message
    console.log("Server is running") 
})
