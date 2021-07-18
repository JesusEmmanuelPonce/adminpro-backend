const User = require("../models/User");

exports.getUser = async(req, res) => {

    const user = await User.find();

    res.json({
        success: true,
        data: user,
    });
};

exports.createUser = async(req, res) => {

    const { name, email, password } = req.body;

    try {

        const isEmail = await User.findOne({ email });

        if(isEmail){
            return res.status(400).json({
                success: true,
                msg: "Email already registered",
            });
        }

        const user = new User(req.body);
        await user.save();

        res.status(200).json({
            success: true,
            msg: "User created",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
        });
    }
};