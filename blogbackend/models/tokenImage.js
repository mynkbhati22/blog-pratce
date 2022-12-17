const mongoose = require("mongoose");

const tokenImage = mongoose.Schema(
  {
    tokenaddress: {
      type: String,
      require: true,
    },
    logoname: {
      type: String,
      require: true,
    },
    tokenimage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("token", tokenImage);

module.exports = Token;
