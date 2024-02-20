import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then((result) => {
      console.log(`MongoDB connected`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
