const mongoose = require("mongoose");

const tags = mongoose.Schema({
  Tagname: {
    type: String,
    require: true,
  },
});

const Tag = mongoose.model("tag", tags);

module.exports = Tag;
