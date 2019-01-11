let express = require("express");
let bodyParser = require("body-parser");

let app = new express();

app.use(bodyParser.urlencoded({extended: true}));
// app.use("/api/commoncell/", require("./commoncell"));

module.exports = app;