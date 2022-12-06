const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
});

const Test = mongoose.model("schema", schema);

module.exports = Test;
