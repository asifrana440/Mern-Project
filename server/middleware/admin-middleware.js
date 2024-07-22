const adminMiddleware = (req, res, next) =>{
    try {
        const adminRole=req.user.isAdmin;
        if(!adminRole){
            return res
            .status(403)
            .json({message: "Access Denied. User is not an admin"})
        }
        //res.status(200).json({msg:req.user})
        next();
    } catch (error) {
        next(error);
    }
};
module.exports = adminMiddleware  
