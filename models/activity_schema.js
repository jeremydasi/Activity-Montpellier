const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  localisation: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Activity", activitySchema);
