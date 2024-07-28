import { Timestamp } from "bson"
import mongoose from mongoose


const M_Record_Schema=new mongoose.model({},{timestamps:true})



export const M_Record_=mongoose.model("Meidcal Record",M_Record_Schema)