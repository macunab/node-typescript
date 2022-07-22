import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user';
import bcrypt from 'bcryptjs';

class AuthMiddleware {
    async verifyUserAndPassword( req: Request, res: Response, next: NextFunction) {
        const user: any = await UserModel.getUserByEmailWithPassword(req.body.email);
        console.log(user);
        if(user) {
            const hashPassword = user.password;
            if(bcrypt.compareSync(req.body.password, hashPassword)) {
                req.body = {
                    id: user._id,
                    email: user.email,
                    name: user.name
                };
                return next();
            }
        }
        res.status(400).json({
            ok: false,
            msg: 'Invalid email and/or password'
        })
    }
}