import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JWTParams } from "../interfaces/interfaces";

const jwtSecret: string = process.env.JWT_SECRET!;


class JwtMiddleware {
    validateJwt( req: Request, res: Response, next: NextFunction) {
        const token = req.header('x-token');
        if(!token) {
            return res.status(400).json({
                ok: false,
                msg: 'header token is required'
            });
        }
        try {
            const { email, name, id } = jwt.verify(token, jwtSecret) as JWTParams;
            req.body = {
                id: id,
                name: name,
                email: email
            }
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: 'invalid token'
            })
        }
        next();
    }
}

export default new JwtMiddleware();