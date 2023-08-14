const express = require("express");
const path = require("path");
const nodemon = require("nodemon")

const print = console.log;
const VIEW_PATH = path.join(__dirname, "/views/")

const PORT_NUMBER = 8080;

let app = express();
app.use(express.static("node_modules/bootstrap/dist/css"))
app.listen(PORT_NUMBER, function() {
    print(`listening on port ${PORT_NUMBER}`)
})

app.get('/', function(req, res) {
        filename = VIEW_PATH + "index.html";
        res.sendFile(filename);
    })

app.get("/add/:no1/:no2", function (req, res) {
    filename = VIEW_PATH + "index.html"
    let n1 = parseInt(req.params.no1)
    let n2 = parseInt(req.params.no2)
    let result = n1 + n2
    res.send(String(result))
})

app.get('/sub', function (req, res) {// query string
    let number1 = parseInt(req.query.x);
    let number2 = parseInt(req.query.y);
    let result = number1 - number2;
    res.send(result + "");// a different way to convert to strings
});

app.get("/info", function(req, res) {
    filename = VIEW_PATH + "info.html"
    res.sendFile(filename)
})