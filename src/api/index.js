const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", function (req, res) {
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