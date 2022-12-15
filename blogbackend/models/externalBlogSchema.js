const mongoose = require("mongoose");

const externalBlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    summary: {
      type: String,
      require: true,
    },
    catogery: {
      type: String,
      require: true,
    },

    Img: {
      type: String,
      require: true,
      unique: true,
    },

    BodyHeading: {
      type: String,
      require: true,
    },
    externallinks: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExternalBlog = mongoose.model("externalBlog", externalBlogSchema);

module.exports = ExternalBlog;
