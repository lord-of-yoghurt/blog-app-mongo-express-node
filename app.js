const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// DB connection
mongoose.connect("mongodb://localhost/blog-app");

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

const Blog = mongoose.model("Blog", blogSchema);

// test instance
// Blog.create({
//   title: "My first post!!!",
//   image: "https://images.unsplash.com/photo-1489344190946-65cc38a7b531?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=480&fit=crop&s=013f72eb5b838050b3dce3c5c43ed62c",
//   body: "Just chillin' with some birds!"
// });

// Routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find({}, (err, blogs) => {
    err ? console.log(err) : res.render("index", {blogs: blogs});
  });
});


app.listen(3000, () => {
  console.log("Your $3000 dinner is served.");
});
