import mongoose from "mongoose";

const wpSchema = mongoose.Schema({
  roomID: String,
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

export default mongoose.model("messages", wpSchema);
