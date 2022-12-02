const mongoose = require("mongoose");

const CatogerySchema = mongoose.Schema(
  {
    catogeryName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Catogery = mongoose.model("Catogery", CatogerySchema);

module.exports = Catogery;
