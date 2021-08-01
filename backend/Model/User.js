import mongoose from 'mongoose'
const signUpTemplate=new mongoose.Schema({
   
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    resume:{
        type:String,
        required:true
    }
})
const User=mongoose.model("Naukri",signUpTemplate)
export default User