import { Request, Response } from 'express';
import UserModel from '../models/user';

class UserController {

    async createUser(req: Request, res: Response) {
        try {
            await UserModel.createUser(req.body);
            res.status(200).json({
                ok: true,
                msg: 'user created successfully'
            });
        } catch(err) {
            res.status(401).json({
                ok: false,
                msg: err
            });
        }
    }

    async listAllUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.getUsers();
            res.status(200).json({
                ok: true,
                msg: 'get all users',
                users
            });
        } catch(err) {
            res.status(400).json({
                ok: false,
                msg: err
            });
        }
    }

    listOneUserByID(req: Request, res: Response) {
        const { id } = req.params;
        if(id){
            res.status(200).json({
                ok: true,
                msg: `get one user by id: ${id}` 
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: 'dont find the id in params'
            });
        }
        
    }

    updateUserByID(req: Request, res: Response) {
        const { id } = req.params;
        if(id) {
            res.status(200).json({
                ok: true,
                msg: `update user by id: ${id}`
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: 'dont find the id in params'
            });
        }
    }

    deleteUserByID(req: Request, res: Response) {
        const { id } = req.params;
        if(id) {
            res.status(200).json({
                ok: true,
                msg: `delete user by id: ${id}`
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: 'dont find the id in params'
            });
        }
    }
}

export default new UserController();