const bcrypt = require('bcrypt');
const Login = require("../Model/LoginSchema");

const logincreateUser = async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };

  try {
    const existingUser = await LoginSchema.findOne({ name: data.name });
    if (existingUser) {
      const isPasswordMatch = await bcrypt.compare(data.password, existingUser.password);
      if (isPasswordMatch) {
        return res.status(200).send("User already exists");
      } else {
        return res.status(400).send("Wrong password");
      }
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      data.password = hashedPassword;

      const newUser = new LoginSchema(data);
      const userdata = await newUser.save();
      console.log(userdata);
      return res.status(201).send("User created successfully");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await LoginSchema.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     const user = await LoginSchema.findOneAndDelete({ name: req.body.username });
//     if (user) {
//       res.status(200).send("User deleted successfully");
//     } else {
//       res.status(404).send("User not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

module.exports = { logincreateUser, getUsers};
