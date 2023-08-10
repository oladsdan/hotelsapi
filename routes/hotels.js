import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotelId, updateHotel } from "../controllers/hotelControllers.js";

const router = express.Router();

//CREATE
router.post("/", createHotel)
//UPDATE
router.put("/:id",updateHotel)

//Delete
router.delete("/:id", deleteHotel)

//Get single
router.get("/:id", getHotelId)

//Get all hotel
router.get("/", getAllHotel)

export default router