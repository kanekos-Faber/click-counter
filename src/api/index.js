const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors');
const bodyparser = require('body-parser')

const corsOptions = {
    origin: 'https://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

var jsonParser = bodyparser.json()
// var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.post("/", jsonParser, function (req, res) {
    console.log(req.body.session_id);
    if (req.body.session_id === undefined || !req.body.session_id) {
        res.send('Not authorized!\n');
        return;
    }
    axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error.data);
        });
});

module.exports = {
    path: "/api/",
    handler: app
};