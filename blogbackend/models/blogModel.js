const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    catogery: {
      type: String,
      require: true,
    },
    tag: {
      type: String,
      require: true,
    },
    conclusion: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    Img: {
      type: String,
      require: true,
      unique: true,
    },
    heading1: {
      type: String,
      require: true,
    },
    body1: {
      type: String,
      require: true,
    },
    heading2: {
      type: String,
      require: true,
    },
    body2: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
