require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { connectionDB } = require("./config/db");

app.use(cors());

app.use(express.json());

connectionDB();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.listen(4000, () => console.log("server ready"));