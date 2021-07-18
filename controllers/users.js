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

    const user = new User(req.body);
    
    await user.save();

    res.status(200).json({
        status: 200,
    });
};