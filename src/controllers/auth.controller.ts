import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const jwtSecret: string = process.env.JWT_SECRET!;
const tokenExpiration = 36000;
class AuthController {
    async createJWT(req: Request, res: Response) {
        try {
            const token = jwt.sign(req.body, jwtSecret, 
                { expiresIn: tokenExpiration });
            return res.status(200).json({
                ok: true,
                token,
                msg: 'create token successfully'
            });    
        } catch(err) {
            return res.status(500).json({
                ok: false,
                msg: `createJWT error: ${err}`
            });
        }
    }
}