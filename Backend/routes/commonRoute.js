const express= require('express');
const router = express.Router()


const {verifyToken}= require('../middlewares/authMiddleware')
const {  createPostValidator ,deletePostValidator,updatePostValidator}= require('../helpers/adminValidator');

const postController = require ('../controllers/postController')

//post routes
router.post('/create-post',verifyToken,createPostValidator, postController.createPost)
router.get('/get-post',postController.getPost)
router.post('/delete-post',verifyToken,deletePostValidator, postController.deletePost)
router.post('/update-post',verifyToken,updatePostValidator, postController.updatePost)

module.exports = router;
