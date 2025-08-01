import mongoose from "mongoose";


const {Schema,model}=mongoose;

const PaymentSchema=new Schema({

  name:{type: String,requireed:true},
  to_user:{type:String,required:true},
  oid:{type:String},
   message: { type: String },
  amount:{type:Number, required:true},
  createdAt:{type:Date,default:Date.now},
  updatedAt:{type:Date,default:Date.now},
  done:{type:Boolean,default:false},
  
});
export default mongoose.models.Payment||model("Payment", PaymentSchema);