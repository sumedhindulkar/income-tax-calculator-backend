const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", usersSchema);

module.exports = { User };
// const buildData = new Building({
//   name: "sangeeta",
//   floor: 14,
//   qrcode: "xyz",
//   visitors: [newVisitor],
// });

// const newVisitor = new Visitor({
//   Vname: "kate",
//   VPhoneNumber: "9998887775",
//   visitTime: "default",
// });
