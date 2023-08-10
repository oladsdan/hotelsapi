import express from "express";
import { deleteUser, getAllUsers, getUserId, updateUser } from "../controllers/userControllers";


const router = express.Router();

//Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUserId);
router.get("/", getAllUsers);


export default router