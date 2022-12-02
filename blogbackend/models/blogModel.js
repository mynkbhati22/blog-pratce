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
    tags: {
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
    },

    body: {
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
