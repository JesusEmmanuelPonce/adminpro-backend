const { validationResult } = require("express-validator");

const validationField = (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            errors: errors.mapped(),
        })
    }

    next();
};

module.exports = {
    validationField,
};
