const onlyAdminAccess = async(req,res,next) =>{
  


  
    if ( req.user.role =='admin') {
      next();
    } else {
      res.status(403).json({ message: 'You do not have permission !' });
    }
  

 
  
}

module.exports={
    onlyAdminAccess
}