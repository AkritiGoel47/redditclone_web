const { validationResult } = require("express-validator");
const Community = require("../models/communityModel");

const createCommunity = async(req,res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            msg: "Errors",
            errors: errors.array(),
          });
        }

const{name,description,topics,rules} = req.body;

const isExistUser = await User.findOne({ name });
    if (isExistUser) {
      return res.status(400).json({
        success: false,
        msg: "Name already Exists!",
      });
    }
    const community = new Community({ name, description,topics,rules });
    const communityData = await community.save();
    
    return res.status(200).json({
      success: true,
      msg: "Community created successfully !",
      data: communityData,
    });

    }catch (error) {
        return res.status(400).json({
          success: failure,
    
          msg: error.message,
        });
      }
}
module.exports=  {
    createCommunity  
};
