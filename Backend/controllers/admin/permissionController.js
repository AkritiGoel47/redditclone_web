const { validationResult } = require("express-validator");
const Permission = require("../../models/permissionModel");

const addPermission = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { permission_name } = req.body;


    const isExists = await Permission.findOne({
     
        permission_name:{
            $regex: permission_name,
            $options:'i'
        } });
    if (isExists) {
      return res.status(400).json({
        success: false,
        msg: "Permission Name already exists",
      });
    }
    var obj = {
      permission_name,
    };
    if (req.body.default) {
      obj.is_default = parseInt(req.body.default); //parseInt is used to convert a string to an integer
    }

    const permission = new Permission(obj); //dynamic object

    const newPermission = await permission.save();
    return res.status(400).json({
      success: true,
      msg: "Permission added successfully!",
      data: newPermission,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const getPermission = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(200).json({
    //     success: false,
    //     msg: "Errors",
    //     errors: errors.array(),
    //   });
    // }

    const permissions = await Permission.find();
    return res.status(200).json({
      success: true,
      msg: "Permissions fetched successfully!",
      data: permissions,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const deletePermission = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { id } = req.body;

    await Permission.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      msg: "Permissions deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const updatePermission = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { id, permission_name } = req.body;

    const isExists = await Permission.findOne({ _id: id });
    if (!isExists) {
      return res.status(400).json({
        success: false,
        msg: "Permission ID not found",
      });
    }

    const isNameAssigned = await Permission.findOne({
      _id: { $ne: id },
    
        permission_name:{
            $regex: permission_name,
            $options:'i'
        }
      ,
    });

    if (isNameAssigned) {
      return res.status(400).json({
        success: false,
        msg: "Permission Name already assigned to another permission",
      });
    }

    var obj = {
      permission_name,
    };
    if (req.body.default!=null) {
      obj.is_default = parseInt(req.body.default); //parseInt is used to convert a string to an integer
    }
    const updatedData = await Permission.findByIdAndUpdate(
      { _id: id },
      {
        $set: obj,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      msg: "Permission updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  addPermission,
  getPermission,
  deletePermission,
  updatePermission,
};
