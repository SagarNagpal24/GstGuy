const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//const GSTformModel = require("./Models/GstForm-data");
const GstFormdatarouter = require("./Routes/Gstform-route");


const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
   "mongodb+srv://sagar:S%40gar1234@cluster0.nikbgvn.mongodb.net/GSTformData?retryWrites=true&w=majority",

   {
    useNewUrlParser: true,
  }
);




app.use(GstFormdatarouter);


app.listen(3003, () => {
  console.log("connection done on 3003 port");
});
