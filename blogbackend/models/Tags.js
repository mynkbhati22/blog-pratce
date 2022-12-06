const mongoose = require("mongoose");

const tags = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
});

const Tag = mongoose.model("tag", tags);

module.exports = Tag;
