const mongoose =require ('mongoose')



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    role:{
        type:Number,

        default:0 //0 ->user, 1-> admin, 2-> sub-admin
    }
});




module.exports = mongoose.model('User',userSchema)
