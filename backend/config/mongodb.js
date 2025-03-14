import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
        });
        console.log("DB Success!");
    } catch (error) {
        console.error("error!", error);
    }
};


export default connectMongo;
