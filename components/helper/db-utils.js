import mongoose from "mongoose";
import Message from "../model/MessageModel";

export async function connectMongoDB() {
  const url = `mongodb+srv://kit1:${process.env.mongoAPI}@cluster0.dc50xli.mongodb.net/${process.env.mongodb_database}`;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  await mongoose.connect(url, { useNewUrlParser: true });
}

export async function insertMessage(newMessage) {
  const message = new Message({
    date: new Date().toISOString(),
    email: newMessage.email,
    name: newMessage.name,
    message: newMessage.message,
  });

  await message.save();
}
