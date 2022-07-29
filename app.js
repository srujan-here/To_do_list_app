const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

var tasks = ["Buy food", "cook food", "eat food"];
var worklist = [];

var t = require(__dirname + "/date.js");
var date=t.getdate()
console.log(t)

app.get("/", (req, res) => {
  res.render("lists", { Srujan: date, Newitem: tasks });
});

app.post("/sru", (req, res) => {
  task = req.body.task;

  var t = req.body.button;
  console.log(t);
  if (t == "work_list") {
    worklist.push(task);
    res.redirect("/work");
  } else {
    tasks.push(task);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("lists", { Srujan: "work_list", Newitem: worklist });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, (req, res) => {
  console.log("hey srujan");
});
