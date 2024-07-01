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

exports.commentValidator = [
    check('postId').not().isEmpty(), 
  check('userId').not().isEmpty(),
  check('content').not().isEmpty(),
];

exports.commentreplyValidator = [
    check('postId').not().isEmpty(), 
  check('commentId').not().isEmpty(),
  check('userId').not().isEmpty(),
  check('content').not().isEmpty(),
]


exports.likeValidator = [
    check('postId').not().isEmpty(), // Assuming postId is sent in the request body
  check('userId').not().isEmpty(),
];


exports.commentlikeValidator = [
    check('postId').not().isEmpty(), // Assuming postId is sent in the request body
    check('commentId').not().isEmpty(),
    check('userId').not().isEmpty(),
]

exports.upvoteValidator = [
    check('postId').not().isEmpty(),
]