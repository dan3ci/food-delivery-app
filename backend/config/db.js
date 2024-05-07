import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://justanotherbrick81:Dimebag123@cluster0.meg24op.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}