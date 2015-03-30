var express = require("express");
var app     = express();

var next = false;
var prev = false;

app.get("/", function(req, res) {
    res.json({ next: next, prev: prev });
    next = prev = false;
});

app.post("/", function(req, res) {
    console.log("next");
    next = true;
    res.end();
});

app.put("/", function(req, res) {
    console.log("prev");
    prev = true;
    res.end();
});

app.listen(9995);