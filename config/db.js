const mongoose = require("mongoose");

const connectionDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://yisus:yisus123@cluster0.bkiaw.mongodb.net/portafolio", {
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