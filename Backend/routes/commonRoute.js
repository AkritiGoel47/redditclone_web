const express= require('express');
const router = express.Router();
const {verifyToken}= require('../middlewares/authMiddleware')
const {  createPostValidator ,deletePostValidator}= require('../helpers/adminValidator');
const{communityValidator,commentValidator,commentreplyValidator,commentlikeValidator,likeValidator,upvoteValidator}= require('../helpers/validator')
const postController = require ('../controllers/postController')
const communityController = require ('../controllers/communityController')

//post routes
router.post('/create-post',verifyToken,createPostValidator, postController.createPost)
router.get('/get-post',postController.getPost)
router.post('/delete-post',verifyToken,deletePostValidator, postController.deletePost)
router.post('/get-post/comment',verifyToken,commentValidator,postController.addComment);
router.post('/get-post/commentreply',verifyToken,commentreplyValidator,postController.addReply);
router.post('/get-post/commentlike',verifyToken,commentlikeValidator,postController.likeComment);
router.post('/get-post/like',verifyToken,likeValidator,postController.likePost);
router.post('/get-post/upvote',verifyToken,upvoteValidator,postController.upvotePost);


 

//community routes
router.post('/community',verifyToken,communityValidator,communityController.createCommunity);



module.exports = router;
