const mongoose = require("mongoose");

const connectionDB = async() => {
    try {
        await mongoose.connect(process.env.BD_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log("connected");
    } catch (err) {
        console.log("connection", err);
        throw new Error("Error to connect");
    }
}

module.exports = { connectionDB };