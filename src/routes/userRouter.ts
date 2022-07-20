import { Application, NextFunction, Request, Response } from "express";
import userController from "../controllers/userController";
import { CommonRoutesConfig } from "../helpers/CommonRoutesConfig";


export class UserRoutes extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): Application {

        // todo body validations
        this.app.route('/users/create')
            .post(userController.createUser);
        
        this.app.route('/users/:id')
            .all((req: Request, res: Response, next: NextFunction) => {
                next();
            })
            .get(userController.listOneUserByID)
            .put(userController.updateUserByID)
            .delete(userController.deleteUserByID)
        return this.app;
    }
}