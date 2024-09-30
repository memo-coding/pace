const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const NewsModel = mongoose.model("New", NewsSchema);

module.exports = NewsModel;
