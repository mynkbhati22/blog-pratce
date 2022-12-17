const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const JWT_SECRET = "lanmrs2022";

  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
