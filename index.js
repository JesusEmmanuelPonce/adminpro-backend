const express = require("express");
const app = express();
const { connectionDB } = require("./config/db");

connectionDB();

app.listen(4000, () => console.log("server ready"));