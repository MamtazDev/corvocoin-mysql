const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();

var corOptions = {
  origin: "https://localhost:8083",
};

// middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers

const inputRoutes = require("./Routes/inputRoutes");
const loginRoutes = require("./Routes/loginRoutes");

app.use("/api/inputValue/", inputRoutes);
app.use("/api/user/", loginRoutes);

//  testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

// server

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`.blue.bold);
});
