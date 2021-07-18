const User = require("../models/User");
const bcryptjs = require("bcryptjs")

exports.getUser = async(req, res) => {

    const user = await User.find();

    res.json({
        success: true,
        data: user,
    });
};

exports.createUser = async(req, res) => {

    const { email, password } = req.body;

    try {

        const isEmail = await User.findOne({ email });

        if(isEmail){
            return res.status(400).json({
                success: true,
                msg: "Email already registered",
            });
        }

        const user = new User(req.body);

        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt)


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

exports.editUser = async(req, res) => {

    const { _id, email } = req.body;

    try {
        
        const isUser = await User.findById( _id );

        if(!isUser){
            return res.status(404).json({
                success: false,
                msg: "user is not register",
            })
        }

        const isEmail = await User.findOne({ email })

        if(isEmail){
            return res.status(400).json({
                success: false,
                msg: "Email does not available"
            })
        }

        const fields = req.body;
        delete fields.password;
        delete fields.google;

        await User.findByIdAndUpdate(_id, fields);

        res.json({
            succes: true,
            msg: "user update"
        });
        
    } catch (err) {
        res.status(500).json({
            success: false,
        });
    }
};