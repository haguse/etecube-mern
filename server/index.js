const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/etecube");

app.post("/api/sign-up", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate username" });
  }
});

app.post("/api/sign-in", async (req, res) => {
  const user = await User.findOne({
    username: `${req.body.username}`,
  });

  if (!user) {
    return res.json({ status: "error", user: false });
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
