 const {z} = require("zod");
 // create a object  schema
 const loginSchema=z.object({
   email:z
   .string({required_error: "email is required"})
   .trim()
   .min(3,{message: "email is at least of 3 characters"})
   .max(255,{message:"email must not be more than 255 characters"}),
   password:z
    .string({required_error: "password is required"})
    .trim()
    .min(7,{message: "password is at least of 7 characters"})
    .max(1024,{message:" password must not be more than 72 characters"}),

 })
 const signupSchema =loginSchema.extend({

    username:z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name is at least of 3 characters"})
    .max(255,{message:" Name must not be more than 255 characters"}),

    phone:z
    .string({required_error: "phone is required"})
    .trim()
    .min(10,{message: "phone is at least of 10 characters"})
    .max(25,{message:"phone must not be more than 20 characters"}),


 });
 
 module.exports={signupSchema,loginSchema};