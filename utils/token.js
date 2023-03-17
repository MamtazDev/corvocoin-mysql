const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payLoad = {
    email: userInfo.email,
    // role: userInfo.role,
    id: userInfo.id,
  };
  const token = jwt.sign(payLoad, process.env.TOKEN_SECRET, {
    expiresIn: "5days",
  });

  return token;
};
