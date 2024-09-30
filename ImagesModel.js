const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const ImagesModel = mongoose.model("Image", ImagesSchema);

module.exports = ImagesModel;
