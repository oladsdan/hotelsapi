import User from "../models/User.js"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

dotenv.config()


export const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt) 
    
        const newUser = new User ({
          username: req.body.username,
          email: req.body.email,
          password: hash
        })
      await newUser.save()
      res.status(200).send("user has been created")
    }catch(err){
        next(err)
    }
}

export const login = async (req, res, next) => {
    // console.log(username, password)
    
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(createError(404, "User not Found!"));
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Username and password wrong"))

        //we create a jwt to pass to verify the user
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin}, process.env.jwt_Access_Token)


        const {password, isAdmin, ...otherDetails} = user._doc;
        
        // using httpOnly true, not allowing to client to reach this cookies
        res.cookie("access_token", token, { httpOnly:true,}).status(200).json({...otherDetails});


    }catch(err){
        next(err)
    }

}