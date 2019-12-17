const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const LoginRouter = require("./routes/login/LoginRouter");

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());

app.use("/api", LoginRouter);

app.get("/", (req, res)=> {
    res.send("Working");
});

module.exports = app;