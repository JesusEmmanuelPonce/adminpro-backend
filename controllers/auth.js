const User = require("../models/User");
const bcryptjs = require("bcryptjs")

exports.login = async(req, res) => {

    const { email, password } = req.body;

    const isUser = await User.findOne({ email });

    if(!isUser){
        return res.status(404).json({
            success: false,
            msg: "Email does not exists"
        });
    }

    const isPassword = bcryptjs.compareSync(password, isUser.password)

    if(!isPassword){
        return res.status(400).json({
            succes: false,
            msg: "Password invalid"
        })
    }

    try {
        res.json({
            success: true,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
        });
    }
};