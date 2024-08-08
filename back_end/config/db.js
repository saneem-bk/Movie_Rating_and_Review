import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || "");
        console.log("connected mongoDB")
    } catch (error) {
        console.error("error connecting to MongoDB :", error);
    }
};