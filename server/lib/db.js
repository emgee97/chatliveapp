import mongoose from 'mongoose';

// Function to connect to MongoDB database
export const connectDB = async () => {
  try {

        mongoose.connection.on('connected', ()=> console.log('Database connected'))
     await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "chatliveapp", 
     });
  } catch (error) {
        console.log(error);
  }
}