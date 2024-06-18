
const { validationResult } = require("express-validator");
const Role =require('../../models/roleModel');
const { storeRoleValidator } = require("../../helpers/adminValidator");
const storeRole = async(req,res) =>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const{role_name,value} = req.body;

   const role = await new Role({
        role_name,
value
    })

    const roleData = await role.save();
    return res.status(200).json({
        success: true,
        msg: 'Role created sucessfully! ',
        data:roleData
      });


    }catch (error) {
    return res.status(400).json({
      success: failure,
      msg: error.message,
    });
  }
};
const getRole = async(req,res) =>{
    try{
        
        const roleData = await Role.find({ value:{
            $ne:1
        }})
return res.status(200).json({
    success: true,
    msg: 'role fetched successfully!',
    data:roleData
    
  });

    }catch (error) {
        return res.status(400).json({
          success: failure,
          msg: error.message,
        });
      }
    }

    module.exports={
        getRole,storeRole
    }