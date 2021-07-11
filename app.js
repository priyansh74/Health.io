const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https"); // api

app.set('view engine','ejs'); //this also means you created a view folder uske andr all ejs files i.e html wale code
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/", function(req,res){
  res.render("index.ejs");
});
/*
 //API work start

const url = 'https://52.66.207.33:8080/clients/hospitals';
  https.get(url,function(response){
    console.log(response);
     response.on("data",function(data){ //get hold of the data
       const hospitalData = JSON.parse(data);
       console.log(hospitalData);
     });
  });

  api work end
*/
app.get("/home", function(req,res){
   
  res.render("home.ejs",{sectionName :"Dashboard"});
});
app.get("/hospitals",function(req,res)
{  
  
  res.render("hospitals.ejs",{sectionName:"Hospitals"});
});

app.get("/clinics",function(req,res)
{
  res.render("clinics.ejs",{sectionName:"Clinics"});
});
app.get("/laboratory",function(req,res)
{
  res.render("laboratory.ejs",{sectionName:"Laboratory"});
});
app.get("/medicine",function(req,res)
{
  res.render("medicine.ejs",{sectionName:"Medicine"});
});
app.get("/ambulance",function(req,res)
{
  res.render("ambulance.ejs",{sectionName:"Ambulance"});
});
app.get("/police",function(req,res)
{
  res.render("police.ejs",{sectionName:"Police"});
});
//52.66.207.33:8080/clients/hospitals

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
