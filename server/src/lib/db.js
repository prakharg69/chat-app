import mongoose from 'mongoose';

export const connection =async()=>{
        try {
            const con =await mongoose.connect(process.env.MONGODB_URL);
            console.log(`mongodb connected : ${con.connection.host}`);
        } catch (error) {
            console.log("mongodb connection error : ",error);            
        }
}