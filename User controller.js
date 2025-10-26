const User = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const addUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  await newUser.save();
  res.status(201).json(newUser);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted successfully' });
};

module.exports = { getUsers, addUser, deleteUser };
