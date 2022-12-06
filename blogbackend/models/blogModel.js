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
    description: {
      type: String,
      require: true,
    },
    Img: {
      type: String,
      require: true,
      unique: true,
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

// FOR VALIDATING URL

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
