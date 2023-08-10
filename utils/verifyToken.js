import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"))
    }

    // then we verify the token if true
    jwt.verify(token, process.env.jwt_Access_Token, (err, user) => {
        if(err) return next(createError(403, "Token is not valid!"))
        req.user = user;
        next()
    });
}
// verifying users
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else{
            if(err) return next(createError(403, "You are not authorized! "))
        }
    })
}

//verify Admin
export const verifyAdmin = (req, res, next) => {
    veriryToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You ar not authorixed!"));
        }
    })
}