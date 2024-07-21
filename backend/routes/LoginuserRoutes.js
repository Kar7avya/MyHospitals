const express = require("express");

const userController = require("../controllers/LoginuserControllers");

const router = express.Router();
router.post("/logincreateuser", LoginuserControllers.logincreateUser);
router.get("/getusers", LoginuserControllers.logingetUsers);
//router.delete("/deleteuser/:id", userController.deleteUser);
// router.put('/updateuser/:id', userController.updateUser);

module.exports = router;