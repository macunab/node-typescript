import { Application } from "express";
import { CommonRoutesConfig } from "../helpers/CommonRoutesConfig";
import validationFields from "../middlewares/validationFields";
import verifyUserAndPassword from '../middlewares/auth.middleware';
import { check } from "express-validator";
import authController from "../controllers/auth.controller";

export class AuthRoute extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'AuthRoute')
    }

    configureRoutes(): Application {
        
        this.app.post('/login', [
            check('email').isEmail().withMessage('email is required'),
            check('password').not().isEmpty().withMessage('password is required')
        ],
        validationFields.verifyFieldsErrors,
        verifyUserAndPassword.verifyUserAndPassword,
        authController.createJWT);
        return this.app;
    }
}