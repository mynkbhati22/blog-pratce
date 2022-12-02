const express = require("express");
const dotenv = require("dotenv");
const Blog = require("../models/blogModel");
const Catogery = require("../models/Catogery");
const multer = require("multer");
const crypto = require("crypto");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const Headerimage = require("../models/headerImageSchema");

const router = express.Router();
dotenv.config();

// FOR STORING IMAEGS IN S3

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const acessKey = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: acessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

// API FOR GETTING IMAGE IN HEADER SLIDER FORNT END

router.get("/gettingheadersliderimage", async (req, res) => {
  try {
    const headersliderImageDetails = await Headerimage.find();
    const urlpost = [];

    for (let i = 0; i < headersliderImageDetails.length; i++) {
      const getObjectParams = {
        Bucket: bucketName,
        Key: headersliderImageDetails[i].headerImage,
      };
      const command = new GetObjectCommand(getObjectParams);
      const newurl = await getSignedUrl(s3, command, { expiresIn: 604800 });
      const newpost = {
        headerImage: headersliderImageDetails[i].headerImage,
        newurl,
        _id: headersliderImageDetails[i]._id,
        url: headersliderImageDetails[i].url,
      };

      urlpost.push(newpost);
    }
    res.send(urlpost);
  } catch (error) {
    console.log(error);
  }
});

// API FOR ADDING IMAGE IN HEADER SLIDER FORNT END

router.post("/headersliderimage", upload.single("image"), async (req, res) => {
  try {
    // FOR S3
    const params = {
      Bucket: bucketName,
      Key: randomImageName(),
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);

    // FOR DATABASE

    const { url } = req.body;
    const headersliderImageDetails = await Headerimage.create({
      headerImage: command.input.Key,
      url,
    });
    res.send(headersliderImageDetails);
  } catch (error) {
    console.log(error);
  }
});

// API FOR DELETING SLIDER

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

// API FOR FILTER CATOGERY

router.post("/filtercatogery", async (req, res) => {
  try {
    const cat = new Blog(req.body);
    console.log("first catogery", cat);
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
