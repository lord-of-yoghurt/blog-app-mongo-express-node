const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

mongoose.connect("mongodb://localhost/blog-app");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));






app.listen(3000, () => {
  console.log("Your $3000 dinner is served.");
});
