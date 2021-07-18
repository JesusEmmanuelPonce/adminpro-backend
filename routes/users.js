const { Router } = require("express");
const {
    getUser,
    createUser
} = require("../controllers/users");

const router = Router();

router.get("/", getUser);

router.post("/create", createUser);

module.exports = router;