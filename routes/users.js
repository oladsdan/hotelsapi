import express from "express";
import { deleteUser, getAllUsers, getUserId, updateUser } from "../controllers/userControllers";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";


const router = express.Router();

// /** Examples on how to use jwt for middlewaree*/
// //using the jwt in utils folder to verify users

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, your are logged in")
// })

// //verifyUsers
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// //check Admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts ")
// })

//Update
router.put("/:id", verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUserId);
router.get("/", verifyAdmin, getAllUsers);


export default router