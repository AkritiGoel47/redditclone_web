const mongoose =require ('mongoose')




const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   
    description: {
        type:String,
        required:true
    },
    categories:[{
        type:mongoose.Schema.Types.ObjectId,     //when post will be given any category then it will be assigned under this
        ref:'Category',
        required:false
    }]
});




module.exports = mongoose.model('posts',postSchema)