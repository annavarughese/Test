const express = require("express");

const app = express();

app.use(express.static("public"));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/views/login_signup.html");
});

app.post("/home", function(req,res){
  res.sendFile(__dirname + "/views/home.html")
});

app.listen(3000,function(){
  console.log("server is listening");
});
