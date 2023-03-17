const db = require("../Models");
const { generateToken } = require("../utils/token");

const Login = db.login;

const addUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    } else {
      const user = await Login.create({ email, password });
      res.status(200).json({
        status: "success",
        message: "Data insert successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Login.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = generateToken(user);

    res.status(200).json({
      status: "success",
      message: "Data insert successfully",
      data: { token },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  const users = await Login.findAll({});
  res.status(200).send(users);
};

const getSingleUser = async (req, res) => {};

module.exports = {
  addUser,
  loginUser,
  getAllUser,
  getSingleUser,
};
