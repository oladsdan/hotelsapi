import express from "express";
import { register, login } from "../controllers/authControllers.js";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hello this is auth")
})

router.post("/register", register)
router.post("/login", login)

export default router