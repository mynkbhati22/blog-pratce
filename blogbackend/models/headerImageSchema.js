const mongoose = require("mongoose");

const headerImageSchema = mongoose.Schema(
  {
    headerImage: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Headerimage = mongoose.model("headerimage", headerImageSchema);

module.exports = Headerimage;
