import mongoose from "mongoose";

const Connection = async (USERNAME, PASSWORD) => {
//   const URL = "mongodb+srv://kalyanibajirao1999:Kalyani9902@cluster0.nhesrgr.mongodb.net/?retryWrites=true&w=majority";
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nhesrgr.mongodb.net/?retryWrites=true&w=majority`;


  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
