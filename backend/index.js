const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("../backend/routes/pins");
const userRoute = require("../backend/routes/users");
dotenv.config();
app.use(express.json());
// mongoose.connect('',{useNewUrlParser:true})
mongoose
  .connect(
    "mongodb+srv://skatyal1999:skatyal1999@cluster0.hbajxtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);
app.listen(5012, () => {
  console.log("backend app is running ");
});
