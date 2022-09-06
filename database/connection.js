const { default: mongoose } = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      console.log("Database connection successful!");
    })
    .catch((err) => console.log(err));
};

module.exports = connectDB;
