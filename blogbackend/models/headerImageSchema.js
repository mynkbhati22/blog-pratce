const mongoose = require("mongoose");

const headerImageSchema = mongoose.Schema(
  {
    Linknurl: {
      type: String,
      required: true,
    },
    headerImage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Headerimage = mongoose.model("headerimage", headerImageSchema);

module.exports = Headerimage;
