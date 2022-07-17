import { Request, Response } from 'express';

class UserController {

    listAllUsers(req: Request, res: Response) {
        res.status(200).json({
            ok: true,
            msg: 'get all users'
        });
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