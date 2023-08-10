import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (err) {
        // res.status(500).json(err)
        next(err)

    }

}

export const updateHotel = async (req, res, next) => {
    const {id} = req.params
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(id, {$set: req.body}, {new:true} )
        res.status(200).json(updateHotel)

    }catch(err){
        // res.status(500).json(err)
        next(err)
    }

}

export const deleteHotel = async (req, res, next) => {
    const {id} = req.params
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(id);
        res.status(200).json(deleteHotel)
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}

export const getHotelId = async (req, res, next ) => {
    const {id} = req.params
    try {
        const singleHotel = await Hotel.findById(id)
        res.status(200).json(hotel);
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}

export const getAllHotel = async (req, res, next) => {
    try {
        const AllHotel = await Hotel.find()
        res.status(200).json(AllHotel);
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}