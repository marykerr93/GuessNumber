const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

let num = Math.floor(Math.random() * 101);

app.get("/", function (req, res){
    res.render('index.ejs');
});

app.post("/guess", function(req, res){
    var guess = req.body.guess;
    res.render('guess.ejs', {num: num, guess: guess});
});

app.get("/reset", function(req, res){
    num = Math.floor(Math.random() * 101);
    res.redirect("/");
});

app.get("*", function(req, res){
    res.send("error");
});

 app.listen(3000, function(){
     console.log("Server is running!");
});