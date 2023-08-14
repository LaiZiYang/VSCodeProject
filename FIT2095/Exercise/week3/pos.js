const express = require("express")
const path = require("path")

const VIEW_PATH = path.join(__dirname, "/views/")
const PORT_NUMBER = 8080

let app = express()

app.listen(PORT_NUMBER, function() {console.log("listening")})
app.use(express.static("node_modules/bootstrap/dist/css"))

function generateList(db) {
    if (db.length == 0) {
        return " n o "
    }

    let st = '  ID    Name     Address  </br>';
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].sender + ' | ' + db[i].address + '</br>';
    }
    return st;
}

var db = []

app.get("/addparcel", function(req, res) {
    let randomId = parseInt(Math.random()*10000)
    let name = req.query.sender
    let address = req.query.address
    db.push({
        id: randomId, sender: name, address: address
    })
    res.send("Successfully Added!")
})

app.get("/getparcels", function(req, res) {
    if (db.length ==0 ) {res.send("no parcels")}
    res.send(generateList(db))
})

app.get("/deleteid", function(req, res) {
    let n = String(req.query.id)
    let idToDelete = undefined
    for(i=0; i<db.length; i++) {
        if (db[i] != undefined && db[i].id == n) {
            idToDelete = i
            break
        } 
    }
    db.splice(idToDelete, 1)
    res.send(generateList(db))
    // db.pop();
    // res.send(generateList(db))
})