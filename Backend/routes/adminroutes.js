const express= require('express');
const router = express.Router()

const auth =require('../middlewares/authMiddleware')
const permissionController = require('../controllers/admin/permissionController')
const {onlyAdminAccess}= require('../middlewares/adminMiddleware')
const {permissionAddValidator,permissionDeleteValidator,permissionUpdateValidator,storeRoleValidator}= require('../helpers/adminValidator');
const roleController = require('../controllers/admin/roleController')
//permission routes
router.post('/add-permission',auth,onlyAdminAccess,permissionAddValidator,permissionController.addPermission)
router.get('/get-permission',auth,onlyAdminAccess,permissionController.getPermission)
router.post('/delete-permission',auth,onlyAdminAccess,permissionDeleteValidator,permissionController.deletePermission)
router.post('/update-permission',auth,onlyAdminAccess,permissionUpdateValidator,permissionController.updatePermission)

//role routes
router.post('/add-role',auth,onlyAdminAccess,storeRoleValidator,roleController.storeRole)
router.get('/get-role',auth,onlyAdminAccess,roleController.getRole);
module.exports = router;
