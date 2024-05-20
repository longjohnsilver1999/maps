const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//register

router.post("/register", async (req, res) => {
  //generate password create user and save user
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newPin = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });


    const user = await newPin.save();

    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json("error here", err);
  }
});

//login
router.post("/login", async (req, res) => {
  //generate password create user and save user
  try {
    // const salt = await bcrypt.genSaltSync(10);
    // const hashed = await bcrypt.hash(req.body.password, salt);
    // const newPin = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hashed,
    // });
const user=await User.findOne({username:req.body.username})
!user&&res.status(400).json("wrong username or password")

const validPassword=await bcrypt.compare(req.body.password,user.password)
!validPassword&&res.status(400).json("wrong username or password")

res.status(200).json({id:user._id,username:user.username})
    // const user = await newPin.save();

    // res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json("error here", err);
  }
});
module.exports = router;
