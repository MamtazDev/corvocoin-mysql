const db = require("../Models");

// create main Model

const InputValue = db.inputValue;

// get all input Value
const getAllInputValue = async (req, res) => {
  const inputs = await InputValue.findAll({});
  res.status(200).send(inputs);
};

const addInputValue = async (req, res) => {
  const info = {
    email: req.body.email,
    name: req.body.name,
    date: req.body.date,
    choice: req.body.choice,
    time: req.body.time,
    input: req.body.input,
  };
  const input = await InputValue.create(info);
  res.status(200).send({
    message: "Input Value Added Successfully",
    status: 200,
  });
};

module.exports = {
  getAllInputValue,
  addInputValue,
};
