const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors');

const corsOptions = {
    origin: 'https://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.post("/", function (req, res) {
    if (req.session.userId == undefined) {
        res.send("invalid request!\n");
    } else {
        //TODO: Validate the userId is active and not reached limit
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