// auth_router.js

const express = require('express');
const router = express.Router();
const authControllers =require("../controllers/auth_controller");// Reference by authController 
const {signupSchema,loginSchema} = require ("../validators/auth-validator");
const  validate = require ("../middleware/validate-middleware");
const authMiddleware=require("../middleware/auth-middleware")

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema) ,authControllers.register); // check validate signup schema therefore given between them
router.route("/login").post(validate(loginSchema),authControllers.login);
router.route("/user").get(authMiddleware,authControllers.user);
module.exports = router;

// QbkasYzT4SiWfvkv
//MernApp

