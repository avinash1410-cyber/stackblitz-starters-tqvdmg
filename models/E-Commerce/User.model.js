import mongoose from mongoose

const user=new mongoose.Schema({
  username:{
    type:string,
    requred:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:string,
    requred:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:string,
    requred:true
  },

},{timestamps:true})

export const User=mongoose.model("User",user)
