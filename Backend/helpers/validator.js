const {check} = require('express-validator');

exports.registerValidator = [
    check('name','Name is required').not().isEmpty(), 
    //name is not available or no name is not given
    check('email','Email is required').isEmail(), 
check('password','Password is required').not().isEmpty(), 

];

exports.loginValidator = [
    
    check('email','Email is required').isEmail(), 
check('password','Password is required').not().isEmpty(), 
];

exports.communityValidator = [    
check('name','Name is required').not().isEmpty(), 
check('description','description is required').not().isEmpty(), 
check('topics','topic is required').not().isEmpty(), 
check('rules','rules is required').not().isEmpty(), 


];