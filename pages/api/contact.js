import mongoose from "mongoose";
import {
  connectMongoDB,
  insertMessage,
} from "../../components/helper/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input!" });
      return;
    }

    //Store it in an object
    const newMessage = {
      email: email,
      name: name,
      message: message,
    };

    try {
      await connectMongoDB();
    } catch (error) {
      res.status(500).json({ message: "Failing connecting to DB!" });
      return;
    }

    try {
      await insertMessage(newMessage);
      res.status(201).json({ message: "Successfully submitted!" });
      return;
    } catch (error) {
      res.status(500).json({ message: "Error submiting!" });
      return;
    }
  }
  mongoose.connection.close();
}

export default handler;
