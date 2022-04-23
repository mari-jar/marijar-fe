var path = require("path");
var express = require("express");

var app = express();

app.set("port", process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

var server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
