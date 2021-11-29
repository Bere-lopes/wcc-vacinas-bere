const express = require("express");
const app = express();
const vaccines = require("./routes/vaccines");

app.use(express.json());

const index = require("./routes/index")

app.use(function(req, res, next)  {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
         "Origin, XRequested-With, Content-Type, Accept"
    );
    next();
});

app.use("/", index);
app.use("/vaccines", vaccines)

module.exports = app;