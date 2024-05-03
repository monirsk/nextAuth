import mongoose from "mongoose";

export const connect = async () => {
  try {
    // const connect = await mongoose.connect(process.env.MONGO_URL!, {
    //   dbName: "todo_manager",
    // });

    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB is connected Successfully");
    });
  } catch (error) {
    console.log("Failed to connect to MOngoDB", error);
    process.exit();
  }
};
