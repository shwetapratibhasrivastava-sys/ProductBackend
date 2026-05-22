import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
       productDescription:{
        type:String,
        required:true
    },
       price:{
        type:Number,
        required:true
    },
   
},{
    timestamps:true
})


const PRODUCT=mongoose.model("PRODUCT",productSchema)
export default PRODUCT