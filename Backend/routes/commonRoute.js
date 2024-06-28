const express= require('express');
const router = express.Router();
const {verifyToken}= require('../middlewares/authMiddleware')
const {  createPostValidator ,deletePostValidator,updatePostValidator}= require('../helpers/adminValidator');
const{communityValidator}= require('../helpers/validator')
const postController = require ('../controllers/postController')
const communityController = require ('../controllers/communityController')

//post routes
router.post('/create-post',verifyToken,createPostValidator, postController.createPost)
router.get('/get-post',postController.getPost)
router.post('/delete-post',verifyToken,deletePostValidator, postController.deletePost)
router.post('/update-post',verifyToken,updatePostValidator, postController.updatePost)
 

//community routes
router.post('/community',verifyToken,communityValidator,communityController.createCommunity);



module.exports = router;
