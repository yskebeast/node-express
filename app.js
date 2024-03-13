const path = require("path");
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// https://expressjs.com/en/4x/api.html#app.set
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  console.log("this always runs");
  next();
});

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404");
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
