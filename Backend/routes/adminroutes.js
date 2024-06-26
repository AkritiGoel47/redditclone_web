const express= require('express');
const router = express.Router()

// const auth =require('../middlewares/authMiddleware')
// const permissionController = require('../controllers/admin/permissionController')
const {onlyAdminAccess}= require('../middlewares/adminMiddleware')
const Post = require("../models/postModel")
// const {permissionAddValidator,permissionDeleteValidator,permissionUpdateValidator,storeRoleValidator}= require('../helpers/adminValidator');
// const roleController = require('../controllers/admin/roleController')
// //permission routes
// router.post('/add-permission',auth,onlyAdminAccess,permissionAddValidator,permissionController.addPermission)
// router.get('/get-permission',auth,onlyAdminAccess,permissionController.getPermission)
// router.post('/delete-permission',auth,onlyAdminAccess,permissionDeleteValidator,permissionController.deletePermission)
// router.post('/update-permission',auth,onlyAdminAccess,permissionUpdateValidator,permissionController.updatePermission)

// //role routes
// router.post('/add-role',auth,onlyAdminAccess,storeRoleValidator,roleController.storeRole)
// router.get('/get-role',auth,onlyAdminAccess,roleController.getRole);
// module.exports = router;



//Admin routes to get posts for validation
router.get('/approvepost',onlyAdminAccess , async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
          req.params.id,
          { status: 'approved' },
          { new: true }
        );
        res.status(200).json(post);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
  });
  
  router.post('/reject-post',onlyAdminAccess, async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { status: 'rejected' },
        { new: true }
      );
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  router.get('/pending-posts',onlyAdminAccess, async (req, res) => {
    try {
      const posts = await Post.find({ status: 'pending' });
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });


  
  module.exports = router;