const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const { name, email, password } = req.body;

   
    
    const isExistUser = await User.findOne({ email });
    if (isExistUser) {
      return res.status(400).json({
        success: false,
        msg: "Email already exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      
    });

    const userData = await user.save();

    return res.status(200).json({
      success: true,
      msg: "Registered successfully!",
      data: userData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};
const generateAccessToken = async (user) => {
  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "2h",
  });
  return token;
};

const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({
        success: false,
        msg: "Email and password is incorrect",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, userData.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        msg: "Email and password is incorrect",
      });
    }
    const accessToken = await generateAccessToken({ user: userData });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV, // Set to true in production
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });

    

    return res.status(200).json({
      success: true,
      accessToken: accessToken,
      tokenType: "Bearer",
      msg: "Login successful",
      data: { _id: userData._id, email: userData.email, role: userData.role },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
 
};
