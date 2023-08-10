import express from "express";
import User from "../models/User.js";
import { createError } from "../utils/error.js";


export const updateUser = async (req, res, next) => {
    const {id} = req.params
    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true} )
        res.status(200).json(updateUser)

    }catch(err){
        // res.status(500).json(err)
        next(err)
    }

}

export const deleteUser = async (req, res, next) => {
    const {id} = req.params
    try {
        const deleteUser = await Hotel.findByIdAndDelete(id);
        res.status(200).json(deleteUser)
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}

export const getUserId = async (req, res, next ) => {
    const {id} = req.params
    try {
        const singleUser = await User.findById(id)
        res.status(200).json(singleUser);
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const AllUser = await User.find()
        res.status(200).json(AllUser);
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}