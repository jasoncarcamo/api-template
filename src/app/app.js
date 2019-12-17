const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());

app.get("/api", (req, res)=> {
    return res.send("Working");
});

module.exports = app;