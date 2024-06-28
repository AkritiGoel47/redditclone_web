const mongoose = require("mongoose");


const communitySchema = new mongoose.Schema({


    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    topics: {
        type: [{
          type: String,
          enum: [ 
            "Technology",
            "Science",
            "Gaming",
            "Music",
            "Movies",
            "Books",
            "Art",
            "Sports",
            "News",
            "Memes"
         
          
          ]
        }],
        
        required:true,
      },
      rules: {
        type: String,
        required:true
      },

    


});


module.exports = mongoose.model('Community',communitySchema);