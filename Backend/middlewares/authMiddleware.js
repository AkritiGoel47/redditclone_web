const jwt = require('jsonwebtoken');


const verifyToken = async(req,res,next) =>
    {
 
const token = req.cookies.accessToken;
   if(!token){
    return res.status(401).json({
        success: false,
        msg: 'Access denied'
      });
   }

   try {
    const verified = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN); 
    req.user = verified.user; 
    next(); 
     
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid token' });
  }
};

   

   


    module.exports = {verifyToken};