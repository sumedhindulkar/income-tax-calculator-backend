require("dotenv").config();
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.get("/users", async (req, res) => {
  const data = await User.find({}).catch((err) => console.log("Error: ", err));
  res.json(data);
});

router.post("/login/user", async (req, res) => {
  const userData = req.body;
  const { email, password } = userData;
  // console.log(email, password);
  const foundUser = await User.findOne({ email: email }).catch((err) =>
    console.log("Ohh no error: " + err)
  );
  // console.log(foundUser);

  if (foundUser) {
    const id = foundUser.id;
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    if (password === foundUser.password) {
      res.json({
        user: {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
        },
        token,
      });
    } else {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
  } else {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
});

// Register a user and add them to database
router.post("/users", async (req, res) => {
  const userData = req.body;
  const { name, email, password } = userData;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.json({ msg: "User Already Exist" });
  }

  const newUser = new User({ name, email, password });

  try {
    await newUser.save((err) => {
      const id = newUser.id;
      const token = jwt.sign({ id }, process.env.JWT_SECRET);

      res.json({
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
        token,
      });
    });
  } catch (err) {
    console.log("some err" + err);
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await User.findById(id).catch((err) =>
    console.log("Error: ", err)
  );
  res.json(data);
});

module.exports = router;
