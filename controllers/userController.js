const User = require('../models/User');

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Checking if user  is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create and save the new user
    const newUser = new User({ name, email });
    await newUser.save();

    // sending reponse user created successfully
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};
