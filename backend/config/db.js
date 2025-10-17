import mongoose from "mongoose"
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://anjalisaride546_db_user:235689@cluster0.04zmfyh.mongodb.net/food_project').then(()=>console.log("DB Connected"));
}