require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { connectionDB } = require("./config/db");

app.use(cors());

connectionDB();

app.listen(4000, () => console.log("server ready"));