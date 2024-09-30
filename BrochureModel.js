const mongoose = require("mongoose");

const BrochureSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const BrochureModel = mongoose.model("Brochure", BrochureSchema);

module.exports = BrochureModel;
