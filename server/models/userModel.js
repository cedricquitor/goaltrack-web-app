const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name value is required"],
    },
    email: {
      type: String,
      required: [true, "Email value is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password value is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
