const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./router/useRouter");
const Tag = require("./models/Tags");

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("connected successfully");
});

app.use("/api", useRouter);

// FOR GETTING TAGS

app.get("/gettags", async (req, res) => {
  try {
    const gettingdata = await Tag.find();
    res.send(gettingdata);
    console.log(gettingdata.length);
  } catch (error) {
    console.log(error);
  }
});

// FOR ADDING TAGS

app.use("/tags", async (req, res) => {
  try {
    const data = new Tag(req.body);
    console.log(data);
    await data.save();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// FOR DELETING API
app.use("/deleteapi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await Tag.findByIdAndDelete({ _id: id });
    console.log(blog);
    res.send(blog);
  } catch (error) {
    console.log(error);
  }
});
const PORT = process.env.PORT || 8001;

app.listen(PORT, console.log(`server is running on PORT ${PORT}`));
