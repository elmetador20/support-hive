import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  profilepic: String,
  coverpic: String,
  razorpayid: String,
  razorpaysecret: String,
}, { timestamps: true });

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
console.log("user model")