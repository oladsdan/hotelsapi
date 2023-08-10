import express from "express";
import { deleteUser, getAllUsers, getUserId, updateUser } from "../controllers/userControllers";
import { verifyToken, verifyUser } from "../utils/verifyToken";


const router = express.Router();

//using the jwt in utils folder to verify users

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, your are logged in")
})

//verifyUsers
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})

//Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUserId);
router.get("/", getAllUsers);


export default router