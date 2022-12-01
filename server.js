const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

// API Middleware

app.use(express.json());

app.use(express.urlencoded());


app.use(express.static(__dirname + "/"));


console.log();


// API ROUTES

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../Andfolio-Frontend/index.html"));
})

app.post('/formPost', (req,res) => {
    console.log("Made it");
    console.log(req.body);

    res.sendFile(path.join(__dirname, "../Andfolio-Frontend/thank-you.html"));
})


// Port listener

app.listen(port, () =>{
    console.log(`Server started at http://localhost:${port}`)
});