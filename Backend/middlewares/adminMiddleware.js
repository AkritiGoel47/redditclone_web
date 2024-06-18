const onlyAdminAccess = async(req,res,next) =>{
  try{


if(req.user.role!=1)
    {
        return res.status(400).json({
            success:false,
            msg:'You do not have permission to access this route'
        })

}

  } catch(error){
    return res.status(400).json({
        success:false,
        msg:error.message
    })

  } 
  return next();
}

module.exports={
    onlyAdminAccess
}