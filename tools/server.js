var path = require("path");
var express = require("express");

var app = express();

app.set("port", process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile("../build/index.html");
});

var server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
