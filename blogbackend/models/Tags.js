const mongoose = require("mongoose");

const TagSchema = mongoose.Schema(
  {
    tagName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model("tag", TagSchema);

module.exports = Tag;
