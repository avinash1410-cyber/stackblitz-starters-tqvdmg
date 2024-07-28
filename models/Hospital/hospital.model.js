import { Timestamp } from "bson"
import mongoose from mongoose


const HospitalSchema=new mongoose.model({
  name:{
    type:String,
    required:true
  },
  working_hours:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  specialised_in:[{
    type:String,
  }]
},{timestamps:true})



export const Hospital=mongoose.model("Hospital",HospitalSchema)