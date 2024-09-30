const mongoose = require("mongoose");

const MapsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const MapsModel = mongoose.model("Map", MapsSchema);

module.exports = MapsModel;
