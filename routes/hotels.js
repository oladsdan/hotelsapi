import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotelId, updateHotel } from "../controllers/hotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//Delete
router.delete("/:id", verifyAdmin, deleteHotel)

//Get single
router.get("/:id",  getHotelId)

//Get all hotel
router.get("/", getAllHotel)

export default router