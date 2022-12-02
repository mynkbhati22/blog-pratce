const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./router/useRouter");

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("connected successfully");
});

app.use("/api", useRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
