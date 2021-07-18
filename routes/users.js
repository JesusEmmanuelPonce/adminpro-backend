const { check } = require("express-validator");
const { Router } = require("express");

const { validationField } = require("../middlewares/validation-fields");
const {
    getUser,
    createUser
} = require("../controllers/users");

const router = Router();

router.get("/", getUser);

router.post("/create",
    [
        check("name", "name is required").not().isEmpty(),
        check("password", "password is required").not().isEmpty(),
        check("email", "email is required").isEmail(),
        validationField,
    ], createUser);

module.exports = router;