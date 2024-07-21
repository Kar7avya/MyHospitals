const user = require("../Model/UserSchema");

const createUser = async (req, res) => {
  console.log(req);
  const newuser = new user(req.body);
  try {
    await newuser.save();
    res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 const getUsers = async (req, res) => {
   const users = await user.find();
   try {
     res.status(200).json(users);
   } catch (err) {
     console.log(err);
   }
 };
 const deleteUser = async (req, res) => {
   const id = req.params.id;
   try {
     const delteduser = await user.findByIdAndDelete(id);
     res.status(200).json(delteduser);
   } catch (err) {
     console.log(err);
   }
 };

//  exports.updateUser = async (req, res) => {
//   try {
//     const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating user', error });
//   }
// };

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};


 module.exports = { createUser ,getUsers,deleteUser};




 
