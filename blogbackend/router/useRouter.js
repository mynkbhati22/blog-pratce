const express = require("express");
const dotenv = require("dotenv");
const Blog = require("../models/blogModel");
const Headerimage = require("../models/headerImageSchema");
const Test = require("../models/schema");
const ExternalBlog = require("../models/externalBlogSchema");
const Token = require("../models/tokenImage");
const User = require("../models/adminSignup");
const generateToken = require("../utils/generateTokens");

const router = express.Router();
dotenv.config();

// API FOR LOGIN AND SIGNUP

router.post("/adminsignup", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const userExist = await User.findOne({ username });

    if (userExist) {
      res.status(403).send("User Already Exists");
      throw new Error("User Already Exists");
    }
    const user = await User.create({
      username,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
});
// API FOR LOGIN
router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;
  console.log("reqbody", req.body);
  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Invaild email or password!");
  }
});

// API FOR GETTING API

router.get("/gettingheadersliderimage", async (req, res) => {
  try {
    const headersliderdata = await Headerimage.find();
    res.send(headersliderdata);
  } catch (error) {
    console.log(error);
  }
});

// API FOR POST IMAGE FOR HEADERSLIDER

router.post("/headersliderimage", async (req, res) => {
  try {
    const headersliderdata = new Headerimage(req.body);
    console.log(headersliderdata);
    await headersliderdata.save();
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

// API FOR UPDATING IMAGES

router.post("/updateheaderslider", async (req, res) => {
  try {
    const id = req.body.id;
    const Linknurl = req.body.Linknurl;
    const headerImage = req.body.headerImage;

    const updatesliderimage = await Headerimage.findByIdAndUpdate(id, {
      Linknurl: Linknurl,
      headerImage: headerImage,
    });

    res.send(updatesliderimage);
  } catch (error) {
    console.log(error);
  }
});

// API FOR DELETING SLIDER IMAGE

router.delete("/deleteheadersliderimage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const headerImage = await Headerimage.findByIdAndDelete({ _id: id });
    console.log(headerImage);
    res.send(headerImage);
  } catch (error) {
    console.log(error);
  }
});

// API FOR GETTING BLOGS

router.get("/gettingblogs", async (req, res) => {
  try {
    const gettingblogs = await Blog.find();
    res.send(gettingblogs.reverse());
    // console.log(gettingblogs.length);
  } catch (error) {
    console.log(error);
  }
});

// API FOR ADDING BLOG

router.post("/addingblogs", async (req, res) => {
  try {
    const addingblogs = new Blog(req.body);
    console.log("adddedblog", addingblogs);
    await addingblogs.save();
    res.send(addingblogs);
  } catch (error) {
    console.log(error);
  }
});

// API FOR SLUG

router.post("/detail", async (req, res) => {
  try {
    const { slug } = req.body;
    const findblogdata = await Blog.findOne({ slug: slug });
    console.log(findblogdata);
    res.send(findblogdata);
  } catch (error) {
    console.log(error);
  }
});

// FOR GETTING CATOGERY

router.get("/", async (req, res) => {
  try {
    const gettingdata = await Test.find();
    res.send(gettingdata);
    console.log(gettingdata.length);
  } catch (error) {
    console.log(error);
  }
});

// FOR ADDING CATOGERY

router.post("/", async (req, res) => {
  try {
    const data = new Test(req.body);
    console.log(data);
    await data.save();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// API FOR UPDATING BLOGS

router.post("/updateblogs", async (req, res) => {
  try {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const Img = req.body.Img;
    const heading1 = req.body.heading1;
    const body1 = req.body.body1;
    const heading2 = req.body.heading2;
    const body2 = req.body.body2;

    const updateBlog = await Blog.findByIdAndUpdate(id, {
      title: title,
      description: description,
      Img: Img,
      heading1: heading1,
      body1: body1,
      heading2: heading2,
      body2: body2,
    });
    res.send(updateBlog);
  } catch (error) {
    console.log(error);
  }
});

// API FOR DELETING BLOGS IMAGE

router.delete("/deleteblogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await Blog.findByIdAndDelete({ _id: id });
    console.log(blog);
    res.send(blog);
  } catch (error) {
    console.log(error);
  }
});

// API for getting external blogs
router.get("/gettingexternalblogs", async (req, res) => {
  try {
    const gettingexternalblogs = await ExternalBlog.find();
    res.send(gettingexternalblogs.reverse());
  } catch (error) {
    console.log(error);
  }
});

// API for posting external blogs

router.post("/externalblogs", async (req, res) => {
  try {
    const externaladdingblogs = new ExternalBlog(req.body);
    console.log("externaladdingblogs", externaladdingblogs);
    await externaladdingblogs.save();
    res.send(externaladdingblogs);
  } catch (error) {
    console.log(error);
  }
});

// API for updating externals blogs

router.post("/updateexternalblogs", async (req, res) => {
  try {
    const id = req.body.id;
    const title = req.body.title;
    const Img = req.body.Img;
    const BodyHeading = req.body.BodyHeading;
    const externallinks = req.body.externallinks;
    const summary = req.body.summary;

    const updateExternalBlogs = await ExternalBlog.findByIdAndUpdate(id, {
      title: title,
      Img: Img,
      summary: summary,
      BodyHeading: BodyHeading,
      externallinks: externallinks,
    });
    console.log("updateExternalBlogs is: ", updateExternalBlogs);
    res.send(updateExternalBlogs);
  } catch (error) {
    console.log(error);
  }
});

// API for deleting external blogs

router.delete("/deleteexternalblogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await ExternalBlog.findByIdAndDelete({ _id: id });
    console.log(blog);
    res.send(blog);
  } catch (error) {
    console.log(error);
  }
});

// API FOR GETTING TOKENS

router.get("/gettingtoken", async (req, res) => {
  try {
    const gettingToken = await Token.find();
    res.send(gettingToken);
  } catch (error) {
    console.log(error);
  }
});
// API FOR ADDING TOKENS

router.post("/addingtoken", async (req, res) => {
  try {
    const addingToken = new Token(req.body);
    await addingToken.save();
    res.send(addingToken);
  } catch (error) {
    console.log(error);
  }
});

// API FOR UPDATING TOKENS

router.post("/updatetoken", async (req, res) => {
  try {
    const { id } = req.body;
    const tokenaddress = req.body.tokenaddress;
    const logoname = req.body.logoname;
    const tokenimage = req.body.tokenimage;

    const updateToken = await Token.findByIdAndUpdate(id, {
      tokenaddress: tokenaddress,
      logoname: logoname,
      tokenimage: tokenimage,
    });
    res.send(updateToken);
  } catch (error) {
    console.log(error);
  }
});

// API FOR DELETING TOKENS

router.delete("/deletetoken/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteToken = await Token.findByIdAndDelete({ _id: id });
    res.send(deleteToken);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
