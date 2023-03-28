import mongoose from "mongoose";

const messageSchema = {
  date: String,
  email: String,
  name: String,
  message: String,
};

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema); //NextJS required to check if duplicated models

export default Message;
