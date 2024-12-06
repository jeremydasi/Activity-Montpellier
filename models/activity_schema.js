import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  localisation: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;

