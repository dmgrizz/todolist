const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request")

const app = express();

  var items = [];
app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  var today = new Date();


  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

});


app.post("/", function(req, res){
  item = req.body.newItem;

  items.push(newItem);
  console.log(req.body.newItem);

  res.redirect("/");

});

app.listen(3000, function(){
  console.log("To do server started");
});
