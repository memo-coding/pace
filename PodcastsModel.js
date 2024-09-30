const mongoose = require("mongoose");

const PodcastsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const PodcastsModel = mongoose.model("Podcast", PodcastsSchema);

module.exports = PodcastsModel;
