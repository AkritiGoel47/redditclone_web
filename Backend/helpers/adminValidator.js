const {check} = require('express-validator');



exports.permissionAddValidator = [
    
    check('permission_name','permission_name is required').not().isEmpty(), 
 
];
exports.permissionDeleteValidator = [
    
    check('id','ID is required').not().isEmpty(), 
 
];
exports.permissionUpdateValidator = [
    
    check('id','ID is required').not().isEmpty(), 
    check('permission_name','permission_name is required').not().isEmpty(), 
 
 
];
exports.categoryAddValidator = [
    
    check('category_name','category_name is required').not().isEmpty(), 
 
];
exports.categoryDeleteValidator = [
    check('id','id is required').not().isEmpty(), 
    
 
];
exports.categoryUpdateValidator = [
    check('id','id is required').not().isEmpty(), 
    check('category_name','category_name is required').not().isEmpty(), 
 
];
exports.createPostValidator = [
    check('title' ,'title is required').not().isEmpty(), 
    check('description','description is required').not().isEmpty(), 
 
];
exports.deletePostValidator = [
    check('id','id is required').not().isEmpty(), 
   
 
];
exports.updatePostValidator = [
    check('id','id is required').not().isEmpty(), 
    check('title' ,'title is required').not().isEmpty(), 
    check('description','description is required').not().isEmpty(), 
 
];
exports.storeRoleValidator = [
    check('role_name','role_name is required').not().isEmpty(), 
    check('value' ,'value is required').not().isEmpty(), 
    
 
];

