import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CommonRoutesConfig } from './helpers/CommonRoutesConfig';
import { UserRoutes } from './routes/userRouter';
import DbConfig from './helpers/DbConfig';
import { AuthRoute } from './routes/auth.route';

DbConfig.connect(process.env.DB_CNN as string);

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Application = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(helmet());
app.use(cors());
app.use(express.json());

routes.push(new UserRoutes(app));
routes.push(new AuthRoute(app));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});