const { check } = require("express-validator");
const { Router } = require("express");

const { validationField } = require("../middlewares/validation-fields");

const { login } = require("../controllers/auth");

const router = Router();

router.post("/login",
    [
        check("email", "Email is required").isEmail(),
        check("password").not().isEmpty(),
        validationField,
    ], login);

module.exports = router;