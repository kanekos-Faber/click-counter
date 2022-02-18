const express = require("express");
const session = require("express-session");
const app = express();
const axios = require("axios");
const cors = require('cors');
const bodyparser = require('body-parser')

const corsOptions = {
    origin: 'https://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(session({
    secret: 'thisissecretofclickcounter',
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxage: 1000 * 60 * 30
    }
}));

app.use(cors(corsOptions));

var jsonParser = bodyparser.json()
// var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.post("/", jsonParser, function (req, res) {
    console.log(req.session.userId);
    if (req.session.userId == undefined) {
        //TODO: Store userId into DynamoDB
        req.session.userId = req.session.id;
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