const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://doadmin:403tMai57X28Nl1c@db-mongodb-nyc1-83346-56cf5fd7.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc1-83346",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection is successfull with Database");
  })
  .catch((e) => {
    console.log("Could not connected with Database", e);
  });

// mongoose
//   .connect("mongodb://localhost:27017/BogPracticeApi", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("mongodb conenction is setup");
//   })
//   .catch((e) => {
//     console.log("there is no mongodb conenction");
//   });
