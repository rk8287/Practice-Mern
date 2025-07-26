const User = require("../models/User");
const jwt = require("jsonwebtoken");

//register

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

//login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, avatar: user.avatar },
      "SECRET_KEY"
    );
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};
