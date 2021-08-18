import mongoose from "mongoose";

const wpSchema2 = mongoose.Schema({
  name: String,
  image: String,
});

export default mongoose.model("rooms", wpSchema2);
