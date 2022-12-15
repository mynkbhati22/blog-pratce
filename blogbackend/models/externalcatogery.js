const mongoose = require("mongoose");

const externalSchema = mongoose.Schema({
  externalcat: {
    type: String,
    require: true,
  },
});

const Externalcat = mongoose.model("externalcat", externalSchema);

module.exports = Externalcat;
