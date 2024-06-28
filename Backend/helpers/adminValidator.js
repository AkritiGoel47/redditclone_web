const {check} = require('express-validator');




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

