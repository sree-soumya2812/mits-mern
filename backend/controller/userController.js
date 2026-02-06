const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(401).json({ message: "User already exist" });
    const user = await User.create({
      name,
      email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// }
// users.push(newUser);
// res.status(200).json(newUser)
// }
exports.getUser = (req, res) => {
  res.status(200).json(users);
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
