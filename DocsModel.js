const mongoose = require("mongoose");

const DocsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

const DocsModel = mongoose.model("Doc", DocsSchema);

module.exports = DocsModel;
