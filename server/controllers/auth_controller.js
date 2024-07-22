const User=require("../models/user_model");
const bcrypt = require("bcryptjs");
const home = async (req,res)=>{
    try {
        res
        .status(200)
        .send("welcome to home page");
    } catch (error) {
        res.status(400).send("page not found");
    }
};

// Registration Register logic
const register = async(req,res)=>{
    try {
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        const userExist = await User.findOne({email});
       
        if(userExist){
            return res.status(400).json({msg:"email already exists"})
        }
        //hash password change intp Bcrypte
        // const saltRound =10;
        // const hash_password  = await bcrypt.hash(password, saltRound) next from  userModel

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
        });
// email exist tk check krna
        res.status(201).json({
             msg: "registration successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
         });

    } catch (error) {
      //  res.status(500).json({msg:"page not found"});
        next(error);
    }
};


// user  Login logic
const login=async(req , res) => {
 try {
    const {email, password} = req.body;
      
    const userExist = await User.findOne({email});
    console.log(userExist);

    if(!userExist){
        return res.status(400).json({message:"Invalid Credentials"});
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = userExist.comparePassword(password);
    if(user){
        res.status(200).json({
            msg: "Login successful", 
           token: await userExist.generateToken(),
           userId: userExist._id.toString(),
        });
    }else{
        res.status(401).json({message: "Invalid email or password"})
    }

 } catch (error) {
    res.status(500).json("page not found");
 }
}

// user logic
  
const user= async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
         res.status(200).json({userData})
    } catch (error) {
        console.log(`error from the user route ${error}`);

    }
}



module.exports = {home,register,login,user};