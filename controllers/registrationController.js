const User = require("../model/userModel");

const registrationController = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.send("user already exists");
  }
  const user = new User({
    username: username,
    email: email,
    password: password,
  });

  user.save();

  res.send(user);
};
// all users controller
const allUsersController = async (req, res) => {
  let data = await User.find({});

  res.send(data);
};

module.exports = { registrationController, allUsersController };
