const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    if (err) return res.status(401).json({ msg: "Invalid token" });

    req.user = decode;
    next();
  });
};

module.exports = auth;
