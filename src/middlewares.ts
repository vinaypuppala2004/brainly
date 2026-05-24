import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_PASSWORD = "1234567890"

function userauth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers["authorization"];

        if(!token) {
            return res.status(401).send("token missing")
        }
        
        const decoded = jwt.verify(token as string, JWT_PASSWORD);

        if(decoded) {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        }
        else {
            return res.status(401).send("invalid token");
        }
    } catch(error) {
        return res.status(401).send("unauthorized");
        console.log("uauthorized");
    }
}

export default userauth;