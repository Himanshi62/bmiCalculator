const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req,res){
  var x = Number(req.body.w);
  var y = Number(req.body.h);
  var bmi = x/(y*y);
  res.send("Your BMI is" + bmi);
});
app.listen(8000);
