const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminsignupSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    default: false,
  },
});

// FOR BCYRPT THE PASSWORD

adminsignupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminsignupSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("adminaccess", adminsignupSchema);

module.exports = User;
