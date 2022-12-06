const express = require("express");
const dotenv = require("dotenv");
const Blog = require("../models/blogModel");
const Headerimage = require("../models/headerImageSchema");
const Test = require("../models/schema");

const router = express.Router();
dotenv.config();

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
    res.send(gettingblogs);
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
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

// API FOR SLUG

router.post("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const findblogdata = await Blog.findOne({ slug: slug });
    console.log(findblogdata);
    res.send("ok");
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
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

// FOR FILTER CAT
router.post("/filtercat", async (req, res) => {
  try {
    const { cat } = req.body;
    console.log(cat);
    let filters = [];
    if (Number(cat) === 0) {
      filters = await Blog.find();
    } else {
      filters = await Blog.find({ catogery: cat });
    }
    const filtercats = [];
    for (let i = 0; i < filters.length; i++) {
      const newfilter = {
        _id: filters[i]._id,
        catogery: filters[i].catogery,
        title: filters[i].title,
        conclusion: filters[i].conclusion,
        description: filters[i].description,
        Img: filters[i].Img,
        body: filters[i].body,
      };
      console.log(newfilter);
      filtercats.push(newfilter);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
