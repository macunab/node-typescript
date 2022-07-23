import { Application, NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import userController from "../controllers/userController";
import { CommonRoutesConfig } from "../helpers/CommonRoutesConfig";
import jwtMiddleware from "../middlewares/jwt.middleware";
import validationFields from "../middlewares/validationFields";


export class UserRoutes extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): Application {

        // list all user route
        this.app.route('/users')
            .get(jwtMiddleware.validateJwt,
                userController.listAllUsers)

        // create a user route
        this.app.route('/users/create')
            .post(
                check('name', 'name is required').not().isEmpty(),
                check('email', 'it has to be a valid email').isEmail(),
                check('password').isLength({ min: 5 }).withMessage('must be at least 5 char long')
                    .matches(/\d/).withMessage('must contain a number'),
                validationFields.verifyFieldsErrors,    
                userController.createUser);
        
        // get-update-delete one user from same route
        this.app.route('/users/:id')
            .all((req: Request, res: Response, next: NextFunction) => {
                next();
            })
            .get(jwtMiddleware.validateJwt,
                userController.listOneUserByID)
            .put(userController.updateUserByID)
            .delete(userController.deleteUserByID)
        return this.app;
    }
}