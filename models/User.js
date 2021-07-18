const { Schema, model } = require("mongoose");

const UserModel = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
    },
    google: {
        type: Boolean,
        default: false,
    },
});

module.exports = model("User", UserModel);