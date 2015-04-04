var express = require("express");
var when    = require("when");
var app     = express();

var next = false;
var prev = false;
var currentSong = "";
var nextSong    = "";

app.get("/", function(req, res) {
    currentSong = req.query.title || currentSong;
    nextSong    = (req.query.next && req.query.next.replace(/Next: /, ""))  || nextSong;

    res.json({
        next:  next, prev:  prev,
        currentSong: currentSong,
        nextSong:    nextSong
    });

    next = prev = false;
});

app.post("/", function(req, res) {
    next = true;
    res.send(nextSong);
});

app.put("/", function(req, res) {
    prev = true;
    res.end();
});

app.listen(9995);