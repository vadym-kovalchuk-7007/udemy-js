import express = require("express");
import bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(3030);
