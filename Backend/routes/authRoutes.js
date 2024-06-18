const express= require('express');
const router = express.Router()
const auth =require('../middlewares/authMiddleware')
const cors =require ('cors');
const authController = require ('../controllers/authController');
const {registerValidator,loginValidator}= require('../helpers/validator');
//midleware
// router.use(
//     cors({
//         credentials: true,
//         origin: 'http://localhost:5173'
//     })
// )


router.post('/register',registerValidator,authController.registerUser);
router.post('/login',loginValidator,authController.loginUser);
//authenticated routes
router.get('/profile',auth,authController.getProfile);

module.exports = router
