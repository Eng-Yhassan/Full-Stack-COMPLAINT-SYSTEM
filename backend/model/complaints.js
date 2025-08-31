const mongoose = require("mongoose");

const ComplaintsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("posts" , ComplaintsSchema)