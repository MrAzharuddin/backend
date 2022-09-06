const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { ping } = require("./api/ping");
const connectDB = require("./database/connection");
const app = express();
dotenv.config();
const port = 3000;

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "This is the main page!",
    success: true,
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.status(200).json([{data: req.body}]);
});

app.get("/ping", ping);

app.listen(port, () => {
  console.log(`listening on ${port} \nhttp://localhost:${port}`);
});
