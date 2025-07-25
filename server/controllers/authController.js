const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;
    const user = await User.create({ name, email, password, avatar });

    const token = jwt.sign(
      { id: user._id, name: user.name, avatar: user.avatar },
      "SECRET_KEY"
    );

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
