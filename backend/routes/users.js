const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//register

router.post("/register", async (req, res) => {
  //generate password create user and save user
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newPin = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });

    const user = await newPin.save();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("error here", err);
  }
});

//login

module.exports = router;
