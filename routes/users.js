const { check } = require("express-validator");
const { Router } = require("express");

const { validationField } = require("../middlewares/validation-fields");
const {
    getUser,
    createUser,
    editUser,
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

router.put("/edit", [
    [
        check("name", "name is required").not().isEmpty(),
        check("email", "email is required").isEmail(),
        check("role", "role is required").not().isEmpty(),
        validationField,
    ],
], editUser);

module.exports = router;