const {check} = require('express-validator');




exports.createPostValidator = [
    check('title' ,'title is required').not().isEmpty(), 
    check('description','description is required').not().isEmpty(), 
 
];
exports.deletePostValidator = [
    check('id','id is required').not().isEmpty(), 
   
 
];


