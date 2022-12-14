const mongoose = require("mongoose");

const externalBlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },

    date: {
      type: String,
      require: true,
    },

    Img: {
      type: String,
      require: true,
      unique: true,
    },

    source: {
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
