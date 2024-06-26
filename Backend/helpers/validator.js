const {check} = require('express-validator');

exports.registerValidator = [
    check('name','Name is required').not().isEmpty(), 
    //name is not available or no name is not given
    check('email','Email is required').isEmail(), 
check('password','Password is required').not().isEmpty(), 
check('role','Role is required').not().isEmpty()
];

exports.loginValidator = [
    
    check('email','Email is required').isEmail(), 
check('password','Password is required').not().isEmpty(), 
];