import mongoose from "mongoose";

export const ConnectToMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Connected to DB`);
    })
    .catch((err) => {
      console.log(`Error connecting to DB`);
    });
};
