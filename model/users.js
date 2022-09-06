const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "user",
  },
  age: {
    type: Number,
    default: 0,
  },
  email: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
